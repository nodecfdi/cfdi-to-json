import { readFileSync } from 'node:fs';
import Factory from '#src/factory';
import JsonConverter from '#src/json_converter';
import UnboundedOccursPaths from '#src/unbounded_occurs_paths';

export const createUnboundedOccursPathsFromJsonFile = (
  sourceFile: string,
): UnboundedOccursPaths => {
  let contents = '';
  try {
    contents = readFileSync(sourceFile, 'utf8');
  } catch {
    throw new Error(`Unable to open file ${sourceFile}`);
  }

  try {
    return UnboundedOccursPaths.fromJsonSource(contents);
  } catch (error) {
    throw new Error(`The file ${sourceFile} has invalid contents ${(error as Error).message}`);
  }
};

export const createFactoryFromJsonFile = (sourceFile: string): Factory => {
  return new Factory(createUnboundedOccursPathsFromJsonFile(sourceFile));
};

export const createJsonConverterFromJsonFile = (sourceFile: string): JsonConverter => {
  return new JsonConverter(createFactoryFromJsonFile(sourceFile));
};
