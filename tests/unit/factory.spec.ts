import Factory from '#src/factory';
import {
  createFactoryFromJsonFile,
  createUnboundedOccursPathsFromJsonFile,
} from '#src/from_json_file';
import UnboundedOccursPaths from '#src/unbounded_occurs_paths';
import { filePath } from '../test_utils.js';

describe('factory', () => {
  test('construct factory uses default unbounded occurs paths', () => {
    const factory = new Factory();

    expect(factory.getUnboundedOccursPaths()).toStrictEqual(UnboundedOccursPaths.defaultSource());
  });

  test('construct factory uses given unbounded occurs paths', () => {
    const unboundedOccursPaths = new UnboundedOccursPaths();
    const factory = new Factory(unboundedOccursPaths);
    expect(factory.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);

    const converter = factory.createConverter();
    expect(converter.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);
  });

  test('create factory using json file valid', () => {
    const factory = createFactoryFromJsonFile(filePath('UnboundedOccursPaths.json'));
    const unboundedOccursPaths = createUnboundedOccursPathsFromJsonFile(
      filePath('UnboundedOccursPaths.json'),
    );

    expect(factory.getUnboundedOccursPaths()).toStrictEqual(unboundedOccursPaths);
  });

  test('create factory using json invalid file', () => {
    expect(() => createFactoryFromJsonFile(filePath('inexistent.txt'))).toThrowError(
      'Unable to open file',
    );
  });

  test('create factory using json file with invalid content', () => {
    expect(() => createFactoryFromJsonFile(import.meta.filename)).toThrowError(
      'has invalid contents',
    );
  });
});
