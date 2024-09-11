import { install } from '@nodecfdi/cfdiutils-common';
import { useTestCase } from '../test-case';
import { JsonConverterBrowser } from 'src/json-converter-browser';

describe('detallista_with_jsdom', () => {
  const { fileContents } = useTestCase();

  beforeAll(() => {
    install(new DOMParser(), new XMLSerializer(), document.implementation);
  });

  test('complemento_detallista', () => {
    const xmlContents = fileContents('detallista-example.xml');
    const jsonFile = fileContents('detallista-example.json');
    const json = JsonConverterBrowser.convertToJson(xmlContents, 4);

    expect(JSON.parse(json)).toEqual(JSON.parse(jsonFile));
    expect(`${json}\n`).toBe(jsonFile);
  });
});
