import { UnboundedOccursPaths } from '../unbounded-occurs-paths';
import { KeysCounter } from './keys-counter';
import { Node, SafeNestedRecord } from './node';

export class Children {
    private _children: Node[] = [];

    private _unboundedOccursPaths: UnboundedOccursPaths;

    private _keysCounter: KeysCounter;

    constructor(unboundedOccursPaths: UnboundedOccursPaths) {
        this._unboundedOccursPaths = unboundedOccursPaths;
        this._keysCounter = new KeysCounter();
    }

    public append(child: Node): void {
        this._children.push(child);
        this._keysCounter.register(child.getKey());
    }

    public isChildrenMultiple(child: Node): boolean {
        return this._keysCounter.hasMany(child.getKey()) || this._unboundedOccursPaths.match(child.getPath());
    }

    public toRecord(): SafeNestedRecord {
        const children: SafeNestedRecord = {};

        for (const item of Array.from(this._children)) {
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
