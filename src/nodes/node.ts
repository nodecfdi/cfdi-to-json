import { type Children } from './children';

export interface SafeNestedRecord extends Record<string, string | undefined | SafeNestedRecord | SafeNestedRecord[]> {}

export class Node {
    private readonly _key: string;

    private readonly _path: string;

    private readonly _children: Children;

    private readonly _attributes: Record<string, string>;

    private readonly _value: string;

    constructor(key: string, path: string, attributes: Record<string, string>, children: Children, value = '') {
        this._key = key;
        this._path = path;
        this._attributes = attributes;
        this._children = children;
        this._value = value;
    }

    public getKey(): string {
        return this._key;
    }

    public getPath(): string {
        return this._path;
    }

    public getValue(): string {
        return this._value;
    }

    public toRecord(): SafeNestedRecord {
        const textRecord = this.getValue() === '' ? {} : { '': this.getValue() };

        return { ...textRecord, ...this._attributes, ...this._children.toRecord() };
    }
}
