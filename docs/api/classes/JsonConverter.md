[@nodecfdi/cfdi-to-json](../README.md) / JsonConverter

# Class: JsonConverter

## Table of contents

### Constructors

- [constructor](JsonConverter.md#constructor)

### Methods

- [convertToJson](JsonConverter.md#converttojson)
- [convertToRecord](JsonConverter.md#converttorecord)

## Constructors

### constructor

• **new JsonConverter**()

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

[json-converter.ts:14](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/json-converter.ts#L14)

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

[json-converter.ts:24](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/json-converter.ts#L24)
