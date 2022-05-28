import { KeysCounter } from '~/nodes/keys-counter';

describe('KeysCounter', () => {
	const createPopulatedCounter = (...keys: string[]): KeysCounter => {
		const counter = new KeysCounter();
		for (const key of keys) {
			counter.register(key);
		}

		return counter;
	};

	test('has many', () => {
		const counter = createPopulatedCounter('author', 'chapter', 'chapter');

		expect(counter.hasMany('chapter')).toBeTruthy();
		expect(counter.hasMany('author')).toBeFalsy();
		expect(counter.hasMany('non-existent')).toBeFalsy();
	});

	test('get', () => {
		const counter = createPopulatedCounter('author', 'chapter', 'chapter');

		expect(counter.get('chapter')).toBe(2);
		expect(counter.get('author')).toBe(1);
		expect(counter.get('non-existent')).toBe(0);
	});
});
