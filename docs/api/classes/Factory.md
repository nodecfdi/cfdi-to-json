[@nodecfdi/cfdi-to-json](../README.md) / Factory

# Class: Factory

## Hierarchy

- [`FactoryBase`](FactoryBase.md)

  ↳ **`Factory`**

## Table of contents

### Constructors

- [constructor](Factory.md#constructor)

### Methods

- [createConverter](Factory.md#createconverter)
- [createDefaultUnboundedOccursPaths](Factory.md#createdefaultunboundedoccurspaths)
- [createUnboundedOccursPathsUsingJsonFile](Factory.md#createunboundedoccurspathsusingjsonfile)
- [createUnboundedOccursPathsUsingJsonSource](Factory.md#createunboundedoccurspathsusingjsonsource)
- [getUnboundedOccursPaths](Factory.md#getunboundedoccurspaths)

## Constructors

### constructor

• **new Factory**(`unboundedOccursPaths?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `unboundedOccursPaths` | ``null`` \| [`UnboundedOccursPaths`](UnboundedOccursPaths.md) | `null` |

#### Overrides

[FactoryBase](FactoryBase.md).[constructor](FactoryBase.md#constructor)

#### Defined in

factory.ts:7

## Methods

### createConverter

▸ **createConverter**(): [`CfdiToDataNode`](CfdiToDataNode.md)

#### Returns

[`CfdiToDataNode`](CfdiToDataNode.md)

#### Defined in

factory.ts:12

___

### createDefaultUnboundedOccursPaths

▸ **createDefaultUnboundedOccursPaths**(): [`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Returns

[`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Defined in

factory.ts:16

___

### createUnboundedOccursPathsUsingJsonFile

▸ **createUnboundedOccursPathsUsingJsonFile**(`sourceFile`): [`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceFile` | `string` |

#### Returns

[`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Defined in

factory.ts:20

___

### createUnboundedOccursPathsUsingJsonSource

▸ **createUnboundedOccursPathsUsingJsonSource**(`contents`): [`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contents` | `string` |

#### Returns

[`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Inherited from

[FactoryBase](FactoryBase.md).[createUnboundedOccursPathsUsingJsonSource](FactoryBase.md#createunboundedoccurspathsusingjsonsource)

#### Defined in

factory-base.ts:10

___

### getUnboundedOccursPaths

▸ **getUnboundedOccursPaths**(): [`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Returns

[`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Inherited from

[FactoryBase](FactoryBase.md).[getUnboundedOccursPaths](FactoryBase.md#getunboundedoccurspaths)

#### Defined in

factory-base.ts:6
