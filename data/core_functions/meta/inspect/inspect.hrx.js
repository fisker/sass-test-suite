export default [
  {
    name: 'empty/bracketed/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect([])}\n',
  },
  {
    name: 'empty/bracketed/output.css',
    data: 'a {\n  b: [];\n}\n',
  },
]
