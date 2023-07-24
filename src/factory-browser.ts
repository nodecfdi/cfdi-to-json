import { FactoryBase } from './factory-base';
import { type UnboundedOccursPaths } from './unbounded-occurs-paths';

export class FactoryBrowser extends FactoryBase {
    constructor(unboundedOccursPaths: UnboundedOccursPaths | null = null) {
        super();
        this._unboundedOccursPaths = unboundedOccursPaths ?? this.createDefaultUnboundedOccursPaths();
    }
}
