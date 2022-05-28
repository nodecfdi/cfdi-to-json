import { readFileSync } from 'fs';
import { CfdiToDataNode } from './cfdi-to-data-node';
import { FactoryBase } from './factory-base';
import { UnboundedOccursPaths } from './unbounded-occurs-paths';

export class Factory extends FactoryBase {
	constructor(unboundedOccursPaths: UnboundedOccursPaths | null = null) {
		super();
		this._unboundedOccursPaths = unboundedOccursPaths || this.createDefaultUnboundedOccursPaths();
	}

	public createConverter(): CfdiToDataNode {
		return new CfdiToDataNode(this.getUnboundedOccursPaths());
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
}
