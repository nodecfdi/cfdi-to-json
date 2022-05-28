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

[nodes/node.ts:14](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/nodes/node.ts#L14)

## Methods

### getKey

▸ **getKey**(): `string`

#### Returns

`string`

#### Defined in

[nodes/node.ts:21](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/nodes/node.ts#L21)

___

### getPath

▸ **getPath**(): `string`

#### Returns

`string`

#### Defined in

[nodes/node.ts:25](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/nodes/node.ts#L25)

___

### toRecord

▸ **toRecord**(): [`SafeNestedRecord`](../interfaces/SafeNestedRecord.md)

#### Returns

[`SafeNestedRecord`](../interfaces/SafeNestedRecord.md)

#### Defined in

[nodes/node.ts:29](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/nodes/node.ts#L29)
