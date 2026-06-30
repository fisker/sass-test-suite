export default [
  {
    name: 'input.scss',
    data: 'foo {\n  a: 4e2px;\n  b: 5e-2px;\n  c: 6e2px + 3px;\n  d: 7e-2px + 3px;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 400px;\n  b: 0.05px;\n  c: 603px;\n  d: 3.07px;\n}\n',
  },
]
