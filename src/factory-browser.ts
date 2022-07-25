import JsonContents from './UnboundedOccursPaths.json';
import { CfdiToDataNode } from './cfdi-to-data-node';
import { FactoryBase } from './factory-base';
import { UnboundedOccursPaths } from './unbounded-occurs-paths';

export class FactoryBrowser extends FactoryBase {
    constructor(unboundedOccursPaths: UnboundedOccursPaths | null = null) {
        super();
        this._unboundedOccursPaths = unboundedOccursPaths || this.createDefaultUnboundedOccursPaths();
    }

    public createConverter(): CfdiToDataNode {
        return new CfdiToDataNode(this.getUnboundedOccursPaths());
    }

    public createDefaultUnboundedOccursPaths(): UnboundedOccursPaths {
        return this.createUnboundedOccursPathsUsingJsonFile();
    }

    public createUnboundedOccursPathsUsingJsonFile(): UnboundedOccursPaths {
        return this.createUnboundedOccursPathsUsingJsonSource(JSON.stringify(JsonContents));
    }
}
