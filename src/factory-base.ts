import { UnboundedOccursPaths } from './unbounded-occurs-paths';

export abstract class FactoryBase {
    protected _unboundedOccursPaths!: UnboundedOccursPaths;

    public getUnboundedOccursPaths(): UnboundedOccursPaths {
        return this._unboundedOccursPaths;
    }

    public createUnboundedOccursPathsUsingJsonSource(contents: string): UnboundedOccursPaths {
        const sourcePaths: string[] = JSON.parse(contents) as string[];

        if (!Array.isArray(sourcePaths)) {
            throw new TypeError(`JSON does not contains an array of entries`);
        }

        for (const [index, sourcePath] of sourcePaths.entries()) {
            if (typeof sourcePath !== 'string') {
                throw new TypeError(`JSON does not contains a string on index ${index}`);
            }
        }

        return new UnboundedOccursPaths(...sourcePaths);
    }
}
