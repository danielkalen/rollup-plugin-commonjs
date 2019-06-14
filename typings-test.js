// @ts-check
import commonjs from '.';

/** @type {import("rollup").RollupOptions} */
const config = {
	input: 'main.js',
	output: {
		file: 'bundle.js',
		format: 'iife'
	},
	plugins: [
		commonjs({
			include: 'node_modules/**',
			exclude: [ 'node_modules/foo/**', 'node_modules/bar/**', /node_modules/ ],
			extensions: [ '.js', '.coffee' ],
			ignoreGlobal: false,
			sourceMap: false,
			namedExports: { './module.js': ['foo', 'bar' ] },
			ignore: [ 'conditional-runtime-dependency' ]
		})
	]
};

export default config;
