module.exports = {
	theme: 'markdown',
	readme: 'none',
	excludePrivate: true,
	excludeInternal: true,
	excludeProtected: true,
	exclude: ['./src/globals.d.ts', './tests'],
	out: 'docs/api',
	entryPoints: ['./src/index.ts']
};
