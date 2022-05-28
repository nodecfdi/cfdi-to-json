export class UnboundedOccursPaths {
	private paths: Map<string, number | string>;

	constructor(...paths: string[]) {
		this.paths = paths.reduce((obj, value, key) => {
			obj.set(value, key);

			return obj;
		}, new Map());
	}

	public match(path: string): boolean {
		return this.paths.has(path);
	}
}
