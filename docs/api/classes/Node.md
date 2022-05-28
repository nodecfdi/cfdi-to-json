[@nodecfdi/cfdi-to-json](../README.md) / Node

# Class: Node

## Table of contents

### Constructors

- [constructor](Node.md#constructor)

### Methods

- [getKey](Node.md#getkey)
- [getPath](Node.md#getpath)
- [toRecord](Node.md#torecord)

## Constructors

### constructor

• **new Node**(`key`, `path`, `attributes`, `children`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `path` | `string` |
| `attributes` | `Record`<`string`, `string`\> |
| `children` | [`Children`](Children.md) |

#### Defined in

nodes/node.ts:14

## Methods

### getKey

▸ **getKey**(): `string`

#### Returns

`string`

#### Defined in

nodes/node.ts:21

___

### getPath

▸ **getPath**(): `string`

#### Returns

`string`

#### Defined in

nodes/node.ts:25

___

### toRecord

▸ **toRecord**(): [`SafeNestedRecord`](../interfaces/SafeNestedRecord.md)

#### Returns

[`SafeNestedRecord`](../interfaces/SafeNestedRecord.md)

#### Defined in

nodes/node.ts:29
