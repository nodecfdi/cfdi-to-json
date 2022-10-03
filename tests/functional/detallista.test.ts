import { install } from '@nodecfdi/cfdiutils-common';
import { DOMParser, XMLSerializer, DOMImplementation } from '@xmldom/xmldom';

import { TestCase } from '../test-case';
import { JsonConverter } from '~/json-converter';

describe('detallista', () => {
    beforeAll(() => {
        install(new DOMParser(), new XMLSerializer(), new DOMImplementation());
    });

    test('complemento detallista', () => {
        const xmlContents = TestCase.fileContents('detallista-example.xml');
        const jsonFile = TestCase.fileContents('detallista-example.json');
        const json = JsonConverter.convertToJson(xmlContents, 4);

        expect(JSON.parse(json)).toStrictEqual(JSON.parse(jsonFile));
        expect(`${json}\n`).toBe(jsonFile);
    });
});
