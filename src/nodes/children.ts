import { UnboundedOccursPaths } from '../unbounded-occurs-paths';
import { KeysCounter } from './keys-counter';
import { Node, SafeNestedMap } from './node';

export class Children {
	private children: Node[] = [];

	private unboundedOccursPaths: UnboundedOccursPaths;

	private keysCounter: KeysCounter;

	constructor(unboundedOccursPaths: UnboundedOccursPaths) {
		this.unboundedOccursPaths = unboundedOccursPaths;
		this.keysCounter = new KeysCounter();
	}

	public append(child: Node): void {
		this.children.push(child);
		this.keysCounter.register(child.getKey());
	}

	public isChildrenMultiple(child: Node): boolean {
		return this.keysCounter.hasMany(child.getKey()) || this.unboundedOccursPaths.match(child.getPath());
	}

	public toMap(): SafeNestedMap {
		const children: SafeNestedMap = new Map();

		for (const item of Array.from(this.children)) {
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
