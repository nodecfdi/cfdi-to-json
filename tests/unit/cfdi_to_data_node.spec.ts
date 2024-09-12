import { getDomImplementation } from '@nodecfdi/cfdi-core';
import CfdiToDataNode from '#src/cfdi_to_data_node';
import UnboundedOccursPaths from '#src/unbounded_occurs_paths';

describe('cfdi to data node', () => {
  test('convert xml document with invalid document throws exception', () => {
    const doc = getDomImplementation().createDocument(null, '');
    const converter = new CfdiToDataNode(new UnboundedOccursPaths());

    expect(() => converter.convertXmlDocument(doc)).toThrowError(
      'The DOMDocument does not have a root element',
    );
  });
});
