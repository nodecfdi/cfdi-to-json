# nodecfdi/cfdi-to-json

[![Source Code][badge-source]][source]
[![Software License][badge-license]][license]
[![Latest Version][badge-release]][release]
[![codecov](https://codecov.io/gh/nodecfdi/cfdi-to-json/branch/main/graph/badge.svg?token=C2VSDMGQ6F)](https://codecov.io/gh/nodecfdi/cfdi-to-json)

[source]: https://github.com/nodecfdi/cfdi-to-json
[badge-source]: https://img.shields.io/badge/source-nodecfdi%2Fcfdi--to--json-blue?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMTIgMTIgNDAgNDAiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiwxMy40Yy0xMC41LDAtMTksOC41LTE5LDE5YzAsOC40LDUuNSwxNS41LDEzLDE4YzEsMC4yLDEuMy0wLjQsMS4zLTAuOWMwLTAuNSwwLTEuNywwLTMuMiBjLTUuMywxLjEtNi40LTIuNi02LjQtMi42QzIwLDQxLjYsMTguOCw0MSwxOC44LDQxYy0xLjctMS4yLDAuMS0xLjEsMC4xLTEuMWMxLjksMC4xLDIuOSwyLDIuOSwyYzEuNywyLjksNC41LDIuMSw1LjUsMS42IGMwLjItMS4yLDAuNy0yLjEsMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEsMC43LTMuNywyLTUuMWMtMC4yLTAuNS0wLjgtMi40LDAuMi01YzAsMCwxLjYtMC41LDUuMiwyIGMxLjUtMC40LDMuMS0wLjcsNC44LTAuN2MxLjYsMCwzLjMsMC4yLDQuNywwLjdjMy42LTIuNCw1LjItMiw1LjItMmMxLDIuNiwwLjQsNC42LDAuMiw1YzEuMiwxLjMsMiwzLDIsNS4xYzAsNy4zLTQuNSw4LjktOC43LDkuNCBjMC43LDAuNiwxLjMsMS43LDEuMywzLjVjMCwyLjYsMCw0LjYsMCw1LjJjMCwwLjUsMC40LDEuMSwxLjMsMC45YzcuNS0yLjYsMTMtOS43LDEzLTE4LjFDNTEsMjEuOSw0Mi41LDEzLjQsMzIsMTMuNHoiLz48L3N2Zz4%3D
[license]: https://github.com/nodecfdi/cfdi-to-json/blob/master/LICENSE
[badge-license]: https://img.shields.io/github/license/nodecfdi/cfdi-to-json?logo=open-source-initiative&style=flat-square
[badge-release]: https://img.shields.io/npm/v/@nodecfdi/cfdi-to-json
[release]: https://www.npmjs.com/package/@nodecfdi/cfdi-to-json

> Library to convert CFDI files to JSON.

:us: The documentation of this project is in spanish as this is the natural language for intented audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Acerca de nodecfdi/cfdi-to-json

Esta es una herramienta que sigue sus propias convenciones para convertir los archivos de CFDI (XML de SAT)
a formato JSON.

Algunas de las convenciones que se siguen son:

-   Los elementos con objetos que contienen los atributos y sus elementos hijos.
-   Los elementos que pueden aparecer más de una vez, son manejados como arreglos.
-   La librería guarda un registro interno de los elementos que pueden aparecer más de una vez.

Libreria inspirada por la versión para php https://github.com/phpcfdi/cfdi-to-json

## Instalación

```shell
npm i @nodecfdi/cfdi-to-json --save
```

o

```shell
yarn add @nodecfdi/cfdi-to-json
```

## Uso básico

### Convirtiendo de CFDI (string) a JSON (string) - Node Version

```ts
import { readFileSync } from 'fs';
import { JsonConverter } from '@nodecfdi/cfdi-to-json';
// Accedemos al contenido en nuestro archivo XML
const xml = readFileSync('archivo-cfdi.xml').toString();
const json = JsonConverter.convertToJson(xml);
console.log(json);
```

### Convirtiendo de `Document` a `Object` - Node Version

```ts
import { Factory } from '@nodecfdi/cfdi-to-json';
/** const document: Document **/
const factory = new Factory();
const dataConverter = factory.createConverter();
const rootNode = dataConverter.convertXmlDocument(document);
const myObject = rootNode.toRecord();
console.log(myObject);
```

### Convirtiendo de CFDI (string) a JSON (string) - Browser Version

```ts
import { JsonConverterBrowser } from '@nodecfdi/cfdi-to-json';
// Accedemos al contenido en nuestro archivo XML
const xml = 'nuestro xml string';
const json = JsonConverterBrowser.convertToJson(xml);
console.log(json);
```

### Convirtiendo de `Document` a `Object` - Browser Version

```ts
import { FactoryBrowser } from '@nodecfdi/cfdi-to-json';
/** const document: Document **/
const factory = new FactoryBrowser();
const dataConverter = factory.createConverter();
const rootNode = dataConverter.convertXmlDocument(document);
const myObject = rootNode.toRecord();
console.log(myObject);
```

### Ejemplo de salida

Note que:

-   `Emisor` parece una propiedad más del objeto principal, pero el contenido es un objeto y no una cadena de caracteres.
-   `Concepto` contiene un arreglo de objetos, cada uno es una representación de un nodo concepto.
-   `Traslado` contiene un arreglo a pesar de que solo contenga un objeto, se conoce que es múltiple.
-   `Complemento` es un arreglo a pesar de lo definido en el Anexo 20 porque el XSD dice que puede tener múltiples apariciones.

```json
{
	"Certificado": "MIIGH...imAyX",
	"CondicionesDePago": "CONTADO",
	"Fecha": "2018-01-12T08:15:01",
	"Folio": "11541",
	"FormaPago": "04",
	"LugarExpedicion": "76802",
	"MetodoPago": "PUE",
	"Moneda": "MXN",
	"NoCertificado": "00001000000401220451",
	"Sello": "Xt7tK...gdg==",
	"Serie": "H",
	"SubTotal": "1709.12",
	"TipoDeComprobante": "I",
	"Total": "2010.01",
	"Version": "3.3",
	"xsi:schemaLocation": "http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd http://www.sat.gob.mx/implocal http://www.sat.gob.mx/sitio_internet/cfd/implocal/implocal.xsd",
	"Emisor": {
		"Nombre": "PROMOTORA OTIR SA DE CV",
		"RegimenFiscal": "601",
		"Rfc": "POT9207213D6"
	},
	"Receptor": {
		"Nombre": "DAY INTERNATIONAL DE MEXICO SA DE CV",
		"Rfc": "DIM8701081LA",
		"UsoCFDI": "G03"
	},
	"Conceptos": {
		"Concepto": [
			{
				"Cantidad": "2.00",
				"ClaveProdServ": "90111501",
				"ClaveUnidad": "E48",
				"Descripcion": "Paquete",
				"Importe": "1355.67",
				"Unidad": "UNIDAD DE SERVICIO",
				"ValorUnitario": "677.83",
				"Impuestos": {
					"Traslados": {
						"Traslado": [
							{
								"Base": "1355.67",
								"Importe": "216.91",
								"Impuesto": "002",
								"TasaOCuota": "0.160000",
								"TipoFactor": "Tasa"
							}
						]
					}
				}
			},
			{
				"Cantidad": "1.00",
				"ClaveProdServ": "90101501",
				"ClaveUnidad": "E48",
				"Descripcion": "Restaurante",
				"Importe": "353.45",
				"Unidad": "UNIDAD DE SERVICIO",
				"ValorUnitario": "353.45",
				"Impuestos": {
					"Traslados": {
						"Traslado": [
							{
								"Base": "353.45",
								"Importe": "56.55",
								"Impuesto": "002",
								"TasaOCuota": "0.160000",
								"TipoFactor": "Tasa"
							}
						]
					}
				}
			}
		]
	},
	"Impuestos": {
		"TotalImpuestosTrasladados": "273.46",
		"Traslados": {
			"Traslado": [
				{
					"Importe": "273.46",
					"Impuesto": "002",
					"TasaOCuota": "0.160000",
					"TipoFactor": "Tasa"
				}
			]
		}
	},
	"Complemento": [
		{
			"ImpuestosLocales": {
				"TotaldeRetenciones": "0.00",
				"TotaldeTraslados": "27.43",
				"version": "1.0",
				"TrasladosLocales": [
					{
						"ImpLocTrasladado": "IH",
						"Importe": "27.43",
						"TasadeTraslado": "2.50"
					}
				]
			},
			"TimbreFiscalDigital": {
				"FechaTimbrado": "2018-01-12T08:17:54",
				"NoCertificadoSAT": "00001000000406258094",
				"RfcProvCertif": "DCD090706E42",
				"SelloCFD": "Xt7tK...gdg==",
				"SelloSAT": "IRy7w...6Zg==",
				"UUID": "CEE4BE01-ADFA-4DEB-8421-ADD60F0BEDAC",
				"Version": "1.1",
				"xsi:schemaLocation": "http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd"
			}
		}
	]
}
```

## Funcionamiento interno

La conversión parte de un objeto `Document` que es recorrido nodo a nodo y en cada transformación genera
un objeto de tipo `Nodes\Node` que contiene sus propiedades básicas de nombre, ruta, atributos e hijos.
Los hijos (`Nodes\Children`) son una colección de nodos `Nodes\Node`.

Al momento de exportar a un Record<key, value> `Nodes\Node.toRecord()` es cuando se resuelve si los nodos deben agregarse como
llaves directas a objetos o bien como arreglos de objetos.

### Elementos con múltiples apariciones

Para detectar los elementos con múltiples apariciones esta librería contiene un archivo `src/UnboundedOccursPaths.json`
con el listado de rutas de elementos que pueden aparecer más de una vez.
