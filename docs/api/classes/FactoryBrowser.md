[@nodecfdi/cfdi-to-json](../README.md) / FactoryBrowser

# Class: FactoryBrowser

## Hierarchy

- [`FactoryBase`](FactoryBase.md)

  ↳ **`FactoryBrowser`**

## Table of contents

### Constructors

- [constructor](FactoryBrowser.md#constructor)

### Methods

- [createConverter](FactoryBrowser.md#createconverter)
- [createDefaultUnboundedOccursPaths](FactoryBrowser.md#createdefaultunboundedoccurspaths)
- [createUnboundedOccursPathsUsingJsonFile](FactoryBrowser.md#createunboundedoccurspathsusingjsonfile)
- [createUnboundedOccursPathsUsingJsonSource](FactoryBrowser.md#createunboundedoccurspathsusingjsonsource)
- [getUnboundedOccursPaths](FactoryBrowser.md#getunboundedoccurspaths)

## Constructors

### constructor

• **new FactoryBrowser**(`unboundedOccursPaths?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `unboundedOccursPaths` | ``null`` \| [`UnboundedOccursPaths`](UnboundedOccursPaths.md) | `null` |

#### Overrides

[FactoryBase](FactoryBase.md).[constructor](FactoryBase.md#constructor)

#### Defined in

[factory-browser.ts:7](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/factory-browser.ts#L7)

## Methods

### createConverter

▸ **createConverter**(): [`CfdiToDataNode`](CfdiToDataNode.md)

#### Returns

[`CfdiToDataNode`](CfdiToDataNode.md)

#### Defined in

[factory-browser.ts:12](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/factory-browser.ts#L12)

___

### createDefaultUnboundedOccursPaths

▸ **createDefaultUnboundedOccursPaths**(): [`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Returns

[`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Defined in

[factory-browser.ts:16](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/factory-browser.ts#L16)

___

### createUnboundedOccursPathsUsingJsonFile

▸ **createUnboundedOccursPathsUsingJsonFile**(): [`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Returns

[`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Defined in

[factory-browser.ts:20](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/factory-browser.ts#L20)

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

[factory-base.ts:10](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/factory-base.ts#L10)

___

### getUnboundedOccursPaths

▸ **getUnboundedOccursPaths**(): [`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Returns

[`UnboundedOccursPaths`](UnboundedOccursPaths.md)

#### Inherited from

[FactoryBase](FactoryBase.md).[getUnboundedOccursPaths](FactoryBase.md#getunboundedoccurspaths)

#### Defined in

[factory-base.ts:6](https://github.com/nodecfdi/cfdi-to-json/blob/28507e4/src/factory-base.ts#L6)
