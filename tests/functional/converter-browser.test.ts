import { install } from '@nodecfdi/cfdiutils-common';
import { DOMImplementation, DOMParser, XMLSerializer } from '@xmldom/xmldom';
import { useTestCase } from '../test-case';
import { JsonConverterBrowser } from 'src/json-converter-browser';
import { type SafeNestedRecord } from 'src/nodes/node';

interface ImpuestosLocales extends SafeNestedRecord {
    ImpuestosLocales: {
        TrasladosLocales: SafeNestedRecord[];
    };
}

interface TestData extends SafeNestedRecord {
    Version: string;
    SubTotal: string;
    Emisor: Record<string, string>;
    Conceptos: {
        Concepto: SafeNestedRecord[];
    };
    Impuestos: {
        Traslados: {
            Traslado: SafeNestedRecord[];
        };
    };
    Complemento: ImpuestosLocales[];
}

describe('Converter', () => {
    const { fileContents } = useTestCase();
    let data: TestData;

    beforeAll(() => {
        install(new DOMParser(), new XMLSerializer(), new DOMImplementation());
    });

    beforeEach(() => {
        const xmlContents = fileContents('cfdi-example.xml');

        data = JsonConverterBrowser.convertToRecord(xmlContents);
    });

    test('convert export attributes from root node', () => {
        expect(data.Version).toBe('3.3');
        expect(data.SubTotal).toBe('1709.12');
        expect(data).toHaveProperty('xsi:schemaLocation');
    });

    test('convert export children nodes from root node', () => {
        expect(data).toHaveProperty('Emisor');
    });

    test('convert export double nodes as record', () => {
        const conceptos = data.Conceptos.Concepto;
        expect(conceptos).toHaveLength(2);

        const firstConcepto = conceptos[0] || [];
        expect(firstConcepto.Descripcion).toBe('Paquete');

        const secondConcepto = conceptos[1] || [];
        expect(secondConcepto.Descripcion).toBe('Restaurante');
    });

    test('converter exports nodes as record when they are known from comprobante', () => {
        expect(data.Impuestos.Traslados.Traslado).toHaveLength(1);
    });

    test('converter exports nodes as record when they are known from complemento', () => {
        expect(data.Complemento[0].ImpuestosLocales.TrasladosLocales).toHaveLength(1);
    });

    test('converter export node value', () => {
        const data = JsonConverterBrowser.convertToRecord<{
            Complemento: [
                {
                    detallista: {
                        specialInstruction: {
                            text: {
                                '': string;
                            };
                        };
                    };
                },
            ];
        }>(fileContents('detallista-example.xml'));

        // must replace white-spaces
        expect(data.Complemento[0].detallista.specialInstruction.text['']).toBe(
            'Un mil ciento sesenta pesos 00/100 m.n.',
        );
    });

    test('json-converter', () => {
        const xmlContents = fileContents('cfdi-example.xml');
        const jsonFile = fileContents('cfdi-example.json');
        const json = JsonConverterBrowser.convertToJson(xmlContents, '\t');
        expect(JSON.parse(json)).toStrictEqual(JSON.parse(jsonFile));
        expect(`${json}\n`).toBe(jsonFile);
    });
});
