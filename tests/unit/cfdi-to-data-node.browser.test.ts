import { install } from '@nodecfdi/cfdiutils-common';
import { UnboundedOccursPaths } from 'src/unbounded-occurs-paths';
import { CfdiToDataNode } from 'src/cfdi-to-data-node';

describe('cfdi_to_data_node_with_jsdom', () => {
    beforeAll(() => {
        install(new DOMParser(), new XMLSerializer(), document.implementation);
    });

    test('convert_xml_document_with_invalid_document_throws_exception', () => {
        const doc = document.implementation.createDocument(null, null);
        const converter = new CfdiToDataNode(new UnboundedOccursPaths());

        expect(() => converter.convertXmlDocument(doc)).toThrowError('The DOMDocument does not have a root element');
    });
});
