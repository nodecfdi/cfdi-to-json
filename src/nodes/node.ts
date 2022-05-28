import { Children } from './children';

export type SafeNestedMap = Map<string, string | SafeNestedMap | SafeNestedMap[]>;

export class Node {
	private _key: string;

	private _path: string;

	private _children: Children;

	private _attributes: Map<string, string>;

	constructor(key: string, path: string, attributes: Record<string, string>, children: Children) {
		this._key = key;
		this._path = path;
		this._attributes = new Map(Object.entries(attributes));
		this._children = children;
	}

	public getKey(): string {
		return this._key;
	}

	public getPath(): string {
		return this._path;
	}

	public toMap(): SafeNestedMap {
		return new Map([
			...Object.entries(this._attributes.entries()),
			...Object.entries(this._children.toMap().entries())
		]);
	}
}
