export default [
  {
    name: 'input.scss',
    data: 'foo { bar: 10 * 5#{px}; }',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: 50 px;\n}\n',
  },
]
