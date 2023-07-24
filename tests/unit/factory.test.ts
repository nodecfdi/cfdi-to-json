import url from 'node:url';
import path from 'node:path';
import { useTestCase } from '../test-case';
import { Factory } from 'src/factory';
import { UnboundedOccursPaths } from 'src/unbounded-occurs-paths';

describe('factory', () => {
    const { filePath } = useTestCase();

    test('construct_factory_uses_default_unbounded-occurs-paths', () => {
        const factory = new Factory();

        expect(factory.getUnboundedOccursPaths()).toStrictEqual(factory.createDefaultUnboundedOccursPaths());
    });

    test('construct_factory_uses_given_unbounded-occurs-paths', () => {
        const unboundedOccursPaths = new UnboundedOccursPaths();
        const factory = new Factory(unboundedOccursPaths);
        expect(factory.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);

        const converter = factory.createConverter();
        expect(converter.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);
    });

    test('create_unbounded-occurs-paths_using_json_file_valid', () => {
        let factory = new Factory();
        const unboundedOccursPaths = factory.createUnboundedOccursPathsUsingJsonFile(
            filePath('UnboundedOccursPaths.json'),
        );

        factory = new Factory(unboundedOccursPaths);

        expect(factory.getUnboundedOccursPaths()).toStrictEqual(factory.createDefaultUnboundedOccursPaths());
    });

    test('create_unbounded-occurs-paths_using_json_file_with_invalid_file', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() =>
            factory.createUnboundedOccursPathsUsingJsonFile(
                `${path.dirname(url.fileURLToPath(import.meta.url))}/not-found`,
            ),
        ).toThrowError('Unable to open file');
    });

    test('create_unbounded-occurs-paths_using_json_file_with_invalid_contents', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() =>
            factory.createUnboundedOccursPathsUsingJsonFile(`${url.fileURLToPath(import.meta.url)}`),
        ).toThrowError('has invalid contents');
    });

    test('create_unbounded-occurs-paths_using_json_source_with_invalid_json', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('')).toThrowError(
            'Unexpected end of JSON input',
        );
    });

    test('create_unbounded-occurs-paths_using_json_not_array', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('""')).toThrowError(
            'JSON does not contains an array of entries',
        );
    });

    test('create_unbounded-occurs-paths_using_json_not_array_of_strings', () => {
        const factory = new Factory(new UnboundedOccursPaths());

        expect(() => factory.createUnboundedOccursPathsUsingJsonSource('["string", 2]')).toThrowError(
            'JSON does not contains a string on index 1',
        );
    });
});
