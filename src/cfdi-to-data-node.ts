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

        // eslint-disable-next-line unicorn/prefer-spread
        for (const childElement of Array.from(element.childNodes)) {
            if (DomValidators.isElement(childElement)) {
                convertionChildren.append(this.convertElementToDataNode(childElement));
            }
        }

        return new Node(element.localName, path, this.obtainAttributes(element), convertionChildren, value);
    }

    private obtainAttributes(element: Element): Record<string, string> {
        const attributes: Record<string, string> = {};
        // eslint-disable-next-line unicorn/prefer-spread
        for (const attribute of Array.from(element.attributes)) {
            attributes[attribute.name] = attribute.value;
        }

        return attributes;
    }

    private buildPathForElement(element: Element): string {
        const namespace = element.namespaceURI ?? '';
        const parentsStack: string[] = [];

        for (let current: ParentNode | null = element; current !== null; current = current.parentNode) {
            if (!DomValidators.isElement(current) && !DomValidators.isAttr(current)) {
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
        // eslint-disable-next-line unicorn/prefer-spread
        for (const children of Array.from(element.childNodes)) {
            if (!DomValidators.isText(children)) {
                continue;
            }

            values.push(children.data);
        }

        return values.join('').replaceAll(/\s+/g, ' ').replaceAll(/^ +/g, '').replaceAll(/ +$/g, '');
    }
}
