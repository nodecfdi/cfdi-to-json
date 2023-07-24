import { install } from '@nodecfdi/cfdiutils-common';
import { DOMParser, XMLSerializer, DOMImplementation } from '@xmldom/xmldom';
import { useTestCase } from '../test-case';
import { JsonConverter } from 'src/json-converter';
import { type SafeNestedRecord } from 'src/nodes/node';

describe('converter', () => {
    const { fileContents } = useTestCase();

    let data: {
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
        Complemento: Array<{
            ImpuestosLocales: {
                TrasladosLocales: SafeNestedRecord[];
            };
        }>;
    };

    beforeAll(() => {
        install(new DOMParser(), new XMLSerializer(), new DOMImplementation());
    });

    beforeEach(() => {
        const xmlContents = fileContents('cfdi-example.xml');

        data = JsonConverter.convertToRecord(xmlContents);
    });

    test('convert_export_attributes_from_root node', () => {
        expect(data.Version).toBe('3.3');
        expect(data.SubTotal).toBe('1709.12');
        expect(data).toHaveProperty('xsi:schemaLocation');
    });

    test('convert_export_children_nodes_from_root_node', () => {
        expect(data).toHaveProperty('Emisor');
    });

    test('convert_export_double_nodes_as_record', () => {
        const conceptos = data.Conceptos.Concepto;
        expect(conceptos).toHaveLength(2);

        const firstConcepto = conceptos[0] || [];
        expect(firstConcepto.Descripcion).toBe('Paquete');

        const secondConcepto = conceptos[1] || [];
        expect(secondConcepto.Descripcion).toBe('Restaurante');
    });

    test('converter_exports_nodes_as_record_when_they_are_known_from_comprobante', () => {
        expect(data.Impuestos.Traslados.Traslado).toHaveLength(1);
    });

    test('converter_exports_nodes_as_record_when_they_are_known_from_complemento', () => {
        expect(data.Complemento[0].ImpuestosLocales.TrasladosLocales).toHaveLength(1);
    });

    test('converter_export_node_value', () => {
        const data = JsonConverter.convertToRecord<{
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

    test('json_converter', () => {
        const xmlContents = fileContents('cfdi-example.xml');
        const jsonFile = fileContents('cfdi-example.json');
        const json = JsonConverter.convertToJson(xmlContents, '\t');
        expect(JSON.parse(json)).toStrictEqual(JSON.parse(jsonFile));
        expect(`${json}\n`).toBe(jsonFile);
    });
});
