import KeysCounter from '#src/nodes/keys_counter';
import type Node from '#src/nodes/node';
import { type SafeNestedRecord } from '#src/types';
import type UnboundedOccursPaths from '#src/unbounded_occurs_paths';

export default class Children {
  private readonly _children: Node[] = [];

  private readonly _unboundedOccursPaths: UnboundedOccursPaths;

  private readonly _keysCounter: KeysCounter;

  public constructor(unboundedOccursPaths: UnboundedOccursPaths) {
    this._unboundedOccursPaths = unboundedOccursPaths;
    this._keysCounter = new KeysCounter();
  }

  public append(child: Node): void {
    this._children.push(child);
    this._keysCounter.register(child.getKey());
  }

  public isChildrenMultiple(child: Node): boolean {
    return (
      this._keysCounter.hasMany(child.getKey()) || this._unboundedOccursPaths.match(child.getPath())
    );
  }

  public toRecord(): SafeNestedRecord {
    const children: SafeNestedRecord = {};

    for (const item of this._children) {
      if (this.isChildrenMultiple(item)) {
        if (children[item.getKey()] === undefined || !Array.isArray(children[item.getKey()])) {
          children[item.getKey()] = [];
        }

        (children[item.getKey()] as SafeNestedRecord[]).push(item.toRecord());
      } else {
        children[item.getKey()] = item.toRecord();
      }
    }

    return children;
  }
}
