import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        amd: {
          id: 'Test',
        },
        name: 'Test',
        sourcemap: true,
        exports: 'named',
        globals: {},
      },
    ],
    plugins: [
      resolve({
        jsnext: true,
        main: true,
      }),
      commonjs(),
    ],
  },
];
