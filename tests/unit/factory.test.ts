import { Factory } from '~/factory';
import { UnboundedOccursPaths } from '~/unbounded-occurs-paths';

describe('Factory', () => {
    test('construct factory uses default unbounded-occurs-paths', () => {
        const factory = new Factory();

        expect(factory.getUnboundedOccursPaths()).toStrictEqual(factory.createDefaultUnboundedOccursPaths());
    });

    test('construct factory uses given unbounded-occurs-paths', () => {
        const unboundedOccursPaths = new UnboundedOccursPaths();
        const factory = new Factory(unboundedOccursPaths);
        expect(factory.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);

        const converter = factory.createConverter();
        expect(converter.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);
    });

    test('create unbounded-occurs-paths using json file with invalid file', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonFile(`${__dirname}/not-found`)).toThrowError(
            'Unable to open file'
        );
    });

    test('create unbounded-occurs-paths using json file with invalid contents', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonFile(`${__filename}`)).toThrowError(
            'has invalid contents'
        );
    });

    test('create unbounded-occurs-paths using json source with invalid json', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('')).toThrowError(
            'Unexpected end of JSON input'
        );
    });

    test('create unbounded-occurs-paths using json not array', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('""')).toThrowError(
            'JSON does not contains an array of entries'
        );
    });

    test('create unbounde-occurs-paths using json not array of strings', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('["string", 2]')).toThrowError(
            'JSON does not contains a string on index 1'
        );
    });
});
