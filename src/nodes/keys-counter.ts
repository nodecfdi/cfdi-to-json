export class KeysCounter {
	private counts: Record<string, number> = {};

	public register(key: string): void {
		this.counts[key] = this.get(key) + 1;
	}

	public get(key: string): number {
		return this.counts[key] || 0;
	}

	public hasMany(key: string): boolean {
		return this.get(key) > 1;
	}
}
