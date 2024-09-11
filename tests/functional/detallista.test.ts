import { install } from '@nodecfdi/cfdiutils-common';
import { DOMParser, XMLSerializer, DOMImplementation } from '@xmldom/xmldom';
import { useTestCase } from '../test-case';
import { JsonConverter } from 'src/json-converter';

describe('detallista', () => {
  const { fileContents } = useTestCase();

  beforeAll(() => {
    install(new DOMParser(), new XMLSerializer(), new DOMImplementation());
  });

  test('complemento_detallista', () => {
    const xmlContents = fileContents('detallista-example.xml');
    const jsonFile = fileContents('detallista-example.json');
    const json = JsonConverter.convertToJson(xmlContents, 4);

    expect(JSON.parse(json)).toEqual(JSON.parse(jsonFile));
    expect(`${json}\n`).toBe(jsonFile);
  });
});
