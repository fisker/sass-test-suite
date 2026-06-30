export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: 'a {+ b {c: d}}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  + b {\n    c: d;\n  }\n}\n',
  },
]
