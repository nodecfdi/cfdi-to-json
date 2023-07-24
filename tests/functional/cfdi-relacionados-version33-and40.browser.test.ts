import { install } from '@nodecfdi/cfdiutils-common';
import { JsonConverterBrowser } from 'src/json-converter-browser';

describe('cfdi_relacionados_version33_and_version40_with_jsdom', () => {
    beforeAll(() => {
        install(new DOMParser(), new XMLSerializer(), document.implementation);
    });

    test('cfdi_relacionados_version33', () => {
        const cfdi33 = [
            '<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/3">',
            '  <cfdi:CfdiRelacionados TipoRelacion="07">',
            '    <cfdi:CfdiRelacionado UUID="02b85c96-504a-4203-ac90-590cd991cf40"/>',
            '  </cfdi:CfdiRelacionados>',
            '</cfdi:Comprobante>',
        ].join('\n');

        const expectedJson = JSON.stringify(
            {
                'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/3',
                'CfdiRelacionados': {
                    TipoRelacion: '07',
                    CfdiRelacionado: [
                        {
                            UUID: '02b85c96-504a-4203-ac90-590cd991cf40',
                        },
                    ],
                },
            },
            null,
            2,
        );

        expect(JsonConverterBrowser.convertToJson(cfdi33, 2)).toEqual(expectedJson);
    });

    test('cfdi_relacionados_version40', () => {
        const cfdi40 = [
            '<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4">',
            '  <cfdi:CfdiRelacionados TipoRelacion="07">',
            '    <cfdi:CfdiRelacionado UUID="02b85c96-504a-4203-ac90-590cd991cf40"/>',
            '  </cfdi:CfdiRelacionados>',
            '</cfdi:Comprobante>',
        ].join('\n');

        const expectedJson = JSON.stringify(
            {
                'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/4',
                'CfdiRelacionados': [
                    {
                        TipoRelacion: '07',
                        CfdiRelacionado: [
                            {
                                UUID: '02b85c96-504a-4203-ac90-590cd991cf40',
                            },
                        ],
                    },
                ],
            },
            null,
            2,
        );

        expect(JsonConverterBrowser.convertToJson(cfdi40)).toEqual(expectedJson);
    });
});
