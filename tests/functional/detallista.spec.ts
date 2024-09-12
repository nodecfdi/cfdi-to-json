import JsonConverter from '#src/json_converter';
import { fileContents } from '../test_utils.js';

describe('detallista', () => {
  test('complemento detallista', () => {
    const xmlContents = fileContents('detallista-example.xml');
    const jsonFile = fileContents('detallista-example.json');
    const jsonConverter = new JsonConverter();
    const json = jsonConverter.convertToJson(xmlContents, 4);

    expect(JSON.parse(json)).toStrictEqual(JSON.parse(jsonFile));
    expect(`${json}\n`).toBe(jsonFile);
  });
});
