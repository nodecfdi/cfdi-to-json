import {
  type Document,
  type Element,
  isAttribute,
  isElement,
  isText,
  newDocumentContent,
  type Node as XMLNode,
} from '@nodecfdi/cfdi-core';
import Children from '#src/nodes/children';
import Node from '#src/nodes/node';
import type UnboundedOccursPaths from '#src/unbounded_occurs_paths';

export default class CfdiToDataNode {
  private readonly _unboundedOccursPaths: UnboundedOccursPaths;

  public constructor(unboundedOccursPaths: UnboundedOccursPaths) {
    this._unboundedOccursPaths = unboundedOccursPaths;
  }

  public getUnboundedOccursPaths(): UnboundedOccursPaths {
    return this._unboundedOccursPaths;
  }

  public convertXmlContent(xmlContents: string): Node {
    const doc = newDocumentContent(xmlContents);

    return this.convertXmlDocument(doc);
  }

  public convertXmlDocument(doc: Document): Node {
    if (doc.documentElement === null) {
      throw new Error('The DOMDocument does not have a root element');
    }

    return this.convertElementToDataNode(doc.documentElement);
  }

  private convertElementToDataNode(element: Element): Node {
    const path = this.buildPathForElement(element);
    const value = this.extractValue(element);

    // children to internal struct
    const convertionChildren = new Children(this._unboundedOccursPaths);

    for (const childElement of element.childNodes) {
      if (isElement(childElement)) {
        convertionChildren.append(this.convertElementToDataNode(childElement));
      }
    }

    return new Node(
      element.localName!,
      path,
      this.obtainAttributes(element),
      convertionChildren,
      value,
    );
  }

  private obtainAttributes(element: Element): Record<string, string> {
    const attributes: Record<string, string> = {};
    for (const attribute of element.attributes) {
      attributes[attribute.name] = attribute.value;
    }

    return attributes;
  }

  private buildPathForElement(element: Element): string {
    const namespace = element.namespaceURI;
    const parentsStack: string[] = [];

    for (let current: XMLNode | null = element; current !== null; current = current.parentNode) {
      if (!isElement(current) && !isAttribute(current)) {
        continue;
      }

      if (namespace !== current.namespaceURI) {
        break;
      }

      parentsStack.push(current.localName!);
    }

    return `{${namespace}}/${[...parentsStack].reverse().join('/')}`;
  }

  private extractValue(element: Element): string {
    const values: string[] = [];
    for (const children of element.childNodes) {
      if (!isText(children)) {
        continue;
      }

      values.push(children.data);
    }

    return values.join('').replaceAll(/\s+/g, ' ').trim();
  }
}
