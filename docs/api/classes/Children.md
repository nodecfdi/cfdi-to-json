[@nodecfdi/cfdi-to-json](../README.md) / Children

# Class: Children

## Table of contents

### Constructors

- [constructor](Children.md#constructor)

### Methods

- [append](Children.md#append)
- [isChildrenMultiple](Children.md#ischildrenmultiple)
- [toRecord](Children.md#torecord)

## Constructors

### constructor

• **new Children**(`unboundedOccursPaths`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unboundedOccursPaths` | [`UnboundedOccursPaths`](UnboundedOccursPaths.md) |

#### Defined in

[nodes/children.ts:12](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/nodes/children.ts#L12)

## Methods

### append

▸ **append**(`child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Node`](Node.md) |

#### Returns

`void`

#### Defined in

[nodes/children.ts:17](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/nodes/children.ts#L17)

___

### isChildrenMultiple

▸ **isChildrenMultiple**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Node`](Node.md) |

#### Returns

`boolean`

#### Defined in

[nodes/children.ts:22](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/nodes/children.ts#L22)

___

### toRecord

▸ **toRecord**(): [`SafeNestedRecord`](../interfaces/SafeNestedRecord.md)

#### Returns

[`SafeNestedRecord`](../interfaces/SafeNestedRecord.md)

#### Defined in

[nodes/children.ts:26](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/nodes/children.ts#L26)
