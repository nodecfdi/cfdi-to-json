import { UnboundedOccursPaths } from '../unbounded-occurs-paths';
import { KeysCounter } from './keys-counter';
import { Node, SafeNestedMap } from './node';

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

	public toMap(): SafeNestedMap {
		const children: SafeNestedMap = new Map();

		for (const item of Array.from(this._children)) {
			if (this.isChildrenMultiple(item)) {
				if (!children.has(item.getKey()) || !Array.isArray(children.get(item.getKey()))) {
					children.set(item.getKey(), []);
				}
				(children.get(item.getKey()) as SafeNestedMap[]).push(item.toMap());
			} else {
				children.set(item.getKey(), item.toMap());
			}
		}

		return children;
	}
}
