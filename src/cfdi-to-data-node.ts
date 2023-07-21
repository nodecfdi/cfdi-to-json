import { DomValidators, getParser } from '@nodecfdi/cfdiutils-common';
import { Children } from './nodes/children';
import { Node } from './nodes/node';
import { type UnboundedOccursPaths } from './unbounded-occurs-paths';

export class CfdiToDataNode {
    private readonly _unboundedOccursPaths: UnboundedOccursPaths;

    constructor(unboundedOccursPaths: UnboundedOccursPaths) {
        this._unboundedOccursPaths = unboundedOccursPaths;
    }

    public getUnboundedOccursPaths(): UnboundedOccursPaths {
        return this._unboundedOccursPaths;
    }

    public convertXmlContent(xmlContents: string): Node {
        const doc = getParser().parseFromString(xmlContents, 'text/xml');

        return this.convertXmlDocument(doc);
    }

    public convertXmlDocument(doc: Document): Node {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
        for (let childElement = element.firstChild; childElement !== null; childElement = element.nextSibling) {
            if (DomValidators.isElement(childElement)) {
                convertionChildren.append(this.convertElementToDataNode(childElement));
            }
        }

        return new Node(element.localName, path, this.obtainAttributes(element), convertionChildren, value);
    }

    private obtainAttributes(element: Element): Record<string, string> {
        const elementAttributes = element.attributes;

        const attributes: Record<string, string> = {};
        let index;
        for (index = 0; index < elementAttributes.length; index++) {
            const attribute = elementAttributes[index];
            attributes[attribute.nodeName] = attribute.value;
        }

        return attributes;
    }

    private buildPathForElement(element: Element): string {
        const namespace = element.namespaceURI ?? '';
        const parentsStack: string[] = [];

        for (let current: ParentNode | null = element; current !== null; current = current.parentNode) {
            if (!DomValidators.isElement(current)) {
                continue;
            }

            if (namespace !== current.namespaceURI) {
                break;
            }

            parentsStack.push(current.localName);
        }

        return `{${namespace}}/${[...parentsStack].reverse().join('/')}`;
    }

    private extractValue(element: Element): string {
        const values: string[] = [];
        for (let children = element.firstChild; children !== null; children = children.nextSibling) {
            if (!DomValidators.isText(children)) {
                continue;
            }

            values.push(children.data);
        }

        return values.join('').replaceAll(/\s+/g, ' ').trim();
    }
}
