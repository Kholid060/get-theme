import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default [
	{
		input: 'src/main.js',
		external: ['tinycolor2', 'lodash.kebabcase'],
		output: [
			{ 
				file: pkg.main, 
				format: 'cjs', 
			},
		],
		plugins: [
			resolve(), 
			commonjs(),
			terser(),
		],
	}
];
