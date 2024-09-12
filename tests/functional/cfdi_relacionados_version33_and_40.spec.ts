import JsonConverter from '#src/json_converter';

describe('cfdi relacionados version 33 and version 40', () => {
  test('cfdi relacionados version 33', () => {
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

    const jsonConverter = new JsonConverter();

    expect(jsonConverter.convertToJson(cfdi33, 2)).toStrictEqual(expectedJson);
  });

  test('cfdi relacionados version40', () => {
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

    const jsonConverter = new JsonConverter();

    expect(jsonConverter.convertToJson(cfdi40)).toStrictEqual(expectedJson);
  });
});
