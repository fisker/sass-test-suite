export default [
  {
    name: 'input.scss',
    data: '@at-root {\n  & {\n    foo {\n      bar: baz;\n    }\n  }\n}',
  },
  {
    name: 'output.css',
    data: '& foo {\n  bar: baz;\n}\n',
  },
]
