export class UnboundedOccursPaths {
    private readonly _paths: Map<string, number | string>;

    constructor(...paths: string[]) {
        this._paths = new Map<string, number>();

        for (const [key, value] of paths.entries()) {
            this._paths.set(value, key);
        }
    }

    public match(path: string): boolean {
        return this._paths.has(path);
    }
}
