[@nodecfdi/cfdi-to-json](../README.md) / JsonConverterBrowser

# Class: JsonConverterBrowser

## Table of contents

### Constructors

- [constructor](JsonConverterBrowser.md#constructor)

### Methods

- [convertToJson](JsonConverterBrowser.md#converttojson)
- [convertToRecord](JsonConverterBrowser.md#converttorecord)

## Constructors

### constructor

• **new JsonConverterBrowser**()

## Methods

### convertToJson

▸ `Static` **convertToJson**(`cfdi`, `space?`): `string`

Helper function to convert a Cfdi XML contents to JSON string

**`throws`** Error

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cfdi` | `string` | `undefined` | XML cfdi contents |
| `space` | `string` \| `number` | `2` | Value if require custom space |

#### Returns

`string`

Json String

#### Defined in

json-converter-browser.ts:14

___

### convertToRecord

▸ `Static` **convertToRecord**<`T`\>(`cfdi`): `T`

Helper function to convert a Cfdi XML contents to Object record

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SafeNestedRecord`](../interfaces/SafeNestedRecord.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cfdi` | `string` | string |

#### Returns

`T`

A Object record data

#### Defined in

json-converter-browser.ts:24
