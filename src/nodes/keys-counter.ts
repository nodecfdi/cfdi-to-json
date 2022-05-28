export class KeysCounter {
	private _counts: Record<string, number> = {};

	public register(key: string): void {
		this._counts[key] = this.get(key) + 1;
	}

	public get(key: string): number {
		return this._counts[key] || 0;
	}

	public hasMany(key: string): boolean {
		return this.get(key) > 1;
	}
}
