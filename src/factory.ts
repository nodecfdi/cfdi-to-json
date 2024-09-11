import { FactoryBase } from './factory-base';
import { type UnboundedOccursPaths } from './unbounded-occurs-paths';

export class Factory extends FactoryBase {
  constructor(unboundedOccursPaths: UnboundedOccursPaths | null = null) {
    super();
    this._unboundedOccursPaths = unboundedOccursPaths ?? this.createDefaultUnboundedOccursPaths();
  }

  public createUnboundedOccursPathsUsingJsonFile(sourceFile: string): UnboundedOccursPaths {
    let contents = '';
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports, unicorn/prefer-module
      const fs: { readFileSync: (path: string, type: string) => string } = require('node:fs');
      contents = fs.readFileSync(sourceFile, 'utf8');
    } catch {
      throw new Error(`Unable to open file ${sourceFile}`);
    }

    let unboundedOccursPaths: UnboundedOccursPaths;
    try {
      unboundedOccursPaths = this.createUnboundedOccursPathsUsingJsonSource(contents);
    } catch (error) {
      throw new Error(`The file ${sourceFile} has invalid contents ${(error as Error).message}`);
    }

    return unboundedOccursPaths;
  }
}
