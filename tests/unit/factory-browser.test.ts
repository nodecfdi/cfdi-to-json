import { FactoryBrowser } from 'src/factory-browser';
import { UnboundedOccursPaths } from 'src/unbounded-occurs-paths';

describe('factory_browser', () => {
    test('construct_factory_uses_default_unbounded-occurs-paths', () => {
        const factory = new FactoryBrowser();

        expect(factory.getUnboundedOccursPaths()).toStrictEqual(factory.createDefaultUnboundedOccursPaths());
    });

    test('construct_factory_uses_given_unbounded-occurs-paths', () => {
        const unboundedOccursPaths = new UnboundedOccursPaths();
        const factory = new FactoryBrowser(unboundedOccursPaths);
        expect(factory.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);

        const converter = factory.createConverter();
        expect(converter.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);
    });

    test('create_unbounded-occurs-paths_using_json_source_with_invalid_json', () => {
        const factory = new FactoryBrowser(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('')).toThrowError(
            'Unexpected end of JSON input',
        );
    });

    test('create_unbounded-occurs-paths_using_json_not_array', () => {
        const factory = new FactoryBrowser(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('""')).toThrowError(
            'JSON does not contains an array of entries',
        );
    });

    test('create_unbounded-occurs-paths_using_json_not_array_of_strings', () => {
        const factory = new FactoryBrowser(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('["string", 2]')).toThrowError(
            'JSON does not contains a string on index 1',
        );
    });
});
