import { DOMImplementation } from '@xmldom/xmldom';
import { UnboundedOccursPaths } from '~/unbounded-occurs-paths';
import { CfdiToDataNode } from '~/cfdi-to-data-node';

describe('CfdiToDataNode', () => {
	test('convert xml document with invalid document throws exception', () => {
		const doc = new DOMImplementation().createDocument(null, null);
		const converter = new CfdiToDataNode(new UnboundedOccursPaths());

		expect(() => converter.convertXmlDocument(doc)).toThrowError('The DOMDocument does not have a root element');
	});
});
