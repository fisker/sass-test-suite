export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: baz; }\n\nbar {\n  bar: baz; }\n\nbaz {\n  bar: baz; }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n}\n\nbar {\n  bar: baz;\n}\n\nbaz {\n  bar: baz;\n}\n',
  },
]
