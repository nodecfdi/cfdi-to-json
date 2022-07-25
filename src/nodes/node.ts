import { Children } from './children';

export interface SafeNestedRecord extends Record<string, string | SafeNestedRecord | SafeNestedRecord[]> {}

export class Node {
    private _key: string;

    private _path: string;

    private _children: Children;

    private _attributes: Record<string, string>;

    constructor(key: string, path: string, attributes: Record<string, string>, children: Children) {
        this._key = key;
        this._path = path;
        this._attributes = attributes;
        this._children = children;
    }

    public getKey(): string {
        return this._key;
    }

    public getPath(): string {
        return this._path;
    }

    public toRecord(): SafeNestedRecord {
        return { ...this._attributes, ...this._children.toRecord() };
    }
}
