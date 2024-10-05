import CfdiToDataNode from '#src/cfdi_to_data_node';
import UnboundedOccursPaths from '#src/unbounded_occurs_paths';

export default class Factory {
  private readonly _unboundedOccursPaths: UnboundedOccursPaths;

  public constructor(unboundedOccursPaths: UnboundedOccursPaths | null = null) {
    this._unboundedOccursPaths = unboundedOccursPaths ?? UnboundedOccursPaths.defaultSource();
  }

  public createConverter(): CfdiToDataNode {
    return new CfdiToDataNode(this._unboundedOccursPaths);
  }

  public getUnboundedOccursPaths(): UnboundedOccursPaths {
    return this._unboundedOccursPaths;
  }
}
