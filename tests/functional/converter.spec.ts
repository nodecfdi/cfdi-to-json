import { createJsonConverterFromJsonFile } from '#src/from_json_file';
import JsonConverter from '#src/json_converter';
import { type SafeNestedRecord } from '#src/types';
import { fileContents, filePath } from '../test_utils.js';

describe('converter', () => {
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
    Complemento: {
      ImpuestosLocales: {
        TrasladosLocales: SafeNestedRecord[];
      };
    }[];
  };

  beforeEach(() => {
    const xmlContents = fileContents('cfdi-example.xml');
    data = new JsonConverter().convertToRecord(xmlContents);
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
    const jsonConverter = new JsonConverter();
    const dataShadow = jsonConverter.convertToRecord<{
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
    expect(dataShadow.Complemento[0].detallista.specialInstruction.text['']).toBe(
      'Un mil ciento sesenta pesos 00/100 m.n.',
    );
  });

  test('json converter', () => {
    const xmlContents = fileContents('cfdi-example.xml');
    const jsonFile = fileContents('cfdi-example.json');
    const jsonConverter = new JsonConverter();
    const json = jsonConverter.convertToJson(xmlContents, '\t');
    expect(JSON.parse(json)).toStrictEqual(JSON.parse(jsonFile));
    expect(`${json}\n`).toBe(jsonFile);
  });

  test('json converter from unbounded occurs paths json file', () => {
    const xmlContents = fileContents('cfdi-example.xml');
    const jsonFile = fileContents('cfdi-example.json');
    const jsonConverter = createJsonConverterFromJsonFile(filePath('UnboundedOccursPaths.json'));
    const json = jsonConverter.convertToJson(xmlContents, '\t');
    expect(JSON.parse(json)).toStrictEqual(JSON.parse(jsonFile));
    expect(`${json}\n`).toBe(jsonFile);
  });
});
