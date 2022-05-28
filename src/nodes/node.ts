import { Children } from './children';

export type SafeNestedMap = Map<string, string | SafeNestedMap | SafeNestedMap[]>;

export class Node {
	private key: string;

	private path: string;

	private children: Children;

	private attributes: Map<string, string>;

	constructor(key: string, path: string, attributes: Record<string, string>, children: Children) {
		this.key = key;
		this.path = path;
		this.attributes = new Map(Object.entries(attributes));
		this.children = children;
	}

	public getKey(): string {
		return this.key;
	}

	public getPath(): string {
		return this.path;
	}

	public toMap(): SafeNestedMap {
		return new Map([
			...Object.entries(this.attributes.entries()),
			...Object.entries(this.children.toMap().entries())
		]);
	}
}
