import { DOMParser } from '@xmldom/xmldom';
import { Children } from './nodes/children';
import { Node } from './nodes/node';
import { UnboundedOccursPaths } from './unbounded-occurs-paths';

export class CfdiToDataNode {
	private _unboundedOccursPaths: UnboundedOccursPaths;

	constructor(unboundedOccursPaths: UnboundedOccursPaths) {
		this._unboundedOccursPaths = unboundedOccursPaths;
	}

	public getUnboundedOccursPaths(): UnboundedOccursPaths {
		return this._unboundedOccursPaths;
	}

	public convertXmlContent(xmlContents: string): Node {
		const doc = new DOMParser().parseFromString(xmlContents, 'text/xml');

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

		// children to internal struct
		const convertionChildren = new Children(this._unboundedOccursPaths);
		for (const childElement of element.childNodes) {
			if (childElement.nodeType === childElement.ELEMENT_NODE) {
				convertionChildren.append(this.convertElementToDataNode(childElement as Element));
			}
		}

		return new Node(element.localName, path, this.obtainAttributes(element), convertionChildren);
	}

	private obtainAttributes(element: Element): Record<string, string> {
		const elementAttributes = element.attributes;

		const attributes: Record<string, string> = {};
		for (const attribute of elementAttributes) {
			attributes[attribute.nodeName] = attribute.value;
		}

		return attributes;
	}

	private buildPathForElement(element: Element): string {
		const namespace = element.namespaceURI || '';
		const parentsStack: string[] = [];

		for (let current: Element | null = element; current !== null; current = current.parentElement) {
			if (namespace !== current.namespaceURI) {
				break;
			}

			parentsStack.push(current.localName);
		}

		return `{${namespace}}/${parentsStack.reverse().join('/')}`;
	}
}
