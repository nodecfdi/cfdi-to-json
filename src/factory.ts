import { readFileSync } from 'fs';
import { CfdiToDataNode } from './cfdi-to-data-node';
import { UnboundedOccursPaths } from './unbounded-occurs-paths';

export class Factory {
	private _unboundedOccursPaths: UnboundedOccursPaths;

	constructor(unboundedOccursPaths: UnboundedOccursPaths | null = null) {
		this._unboundedOccursPaths = unboundedOccursPaths || this.createDefaultUnboundedOccursPaths();
	}

	public createConverter(): CfdiToDataNode {
		return new CfdiToDataNode(this.getUnboundedOccursPaths());
	}

	public getUnboundedOccursPaths(): UnboundedOccursPaths {
		return this._unboundedOccursPaths;
	}

	public createDefaultUnboundedOccursPaths(): UnboundedOccursPaths {
		return this.createUnboundedOccursPathsUsingJsonFile(`${__dirname}/UnboundedOccursPaths.json`);
	}

	public createUnboundedOccursPathsUsingJsonFile(sourceFile: string): UnboundedOccursPaths {
		let contents = '';
		try {
			contents = readFileSync(sourceFile, 'utf-8');
		} catch (e) {
			throw new Error(`Unable to open file ${sourceFile}`);
		}

		let unboundedOccursPaths: UnboundedOccursPaths;
		try {
			unboundedOccursPaths = this.createUnboundedOccursPathsUsingJsonSource(contents);
		} catch (e) {
			throw new Error(`The file ${sourceFile} has invalid contents ${(e as Error).message}`);
		}

		return unboundedOccursPaths;
	}

	public createUnboundedOccursPathsUsingJsonSource(contents: string): UnboundedOccursPaths {
		const sourcePaths = JSON.parse(contents);

		if (!Array.isArray(sourcePaths)) {
			throw new Error(`JSON does not contains an array of entries`);
		}

		for (const [index, sourcePath] of sourcePaths.entries()) {
			if (typeof sourcePath !== 'string') {
				throw new Error(`JSON does not contains a string on index ${index}`);
			}
		}

		return new UnboundedOccursPaths(...sourcePaths);
	}
}
