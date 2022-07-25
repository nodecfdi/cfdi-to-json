import { install } from '@nodecfdi/cfdiutils-common';
import { DOMImplementation, DOMParser, XMLSerializer } from '@xmldom/xmldom';

import { JsonConverter } from '~/json-converter';

describe('CfdiRelacionadosVersion33And40', () => {
    beforeAll(() => {
        install(new DOMParser(), new XMLSerializer(), new DOMImplementation());
    });

    test('cfdi relacionados version33', () => {
        const cfdi33 = [
            '<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/3">',
            '  <cfdi:CfdiRelacionados TipoRelacion="07">',
            '    <cfdi:CfdiRelacionado UUID="02b85c96-504a-4203-ac90-590cd991cf40"/>',
            '  </cfdi:CfdiRelacionados>',
            '</cfdi:Comprobante>'
        ].join('\n');

        const expectedJson = JSON.stringify(
            {
                'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/3',
                'CfdiRelacionados': {
                    TipoRelacion: '07',
                    CfdiRelacionado: [
                        {
                            UUID: '02b85c96-504a-4203-ac90-590cd991cf40'
                        }
                    ]
                }
            },
            null,
            2
        );

        expect(JsonConverter.convertToJson(cfdi33, 2)).toEqual(expectedJson);
    });

    test('cfdi relacionados version40', () => {
        const cfdi40 = [
            '<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4">',
            '  <cfdi:CfdiRelacionados TipoRelacion="07">',
            '    <cfdi:CfdiRelacionado UUID="02b85c96-504a-4203-ac90-590cd991cf40"/>',
            '  </cfdi:CfdiRelacionados>',
            '</cfdi:Comprobante>'
        ].join('\n');

        const expectedJson = JSON.stringify(
            {
                'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/4',
                'CfdiRelacionados': [
                    {
                        TipoRelacion: '07',
                        CfdiRelacionado: [
                            {
                                UUID: '02b85c96-504a-4203-ac90-590cd991cf40'
                            }
                        ]
                    }
                ]
            },
            null,
            2
        );

        expect(JsonConverter.convertToJson(cfdi40, 2)).toEqual(expectedJson);
    });
});
