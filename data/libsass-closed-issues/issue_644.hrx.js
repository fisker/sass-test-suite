export default [
  {
    name: 'input.scss',
    data: 'foo {\n  background-image: url(foo/#{"bar"}/baz.jpg);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  background-image: url(foo/bar/baz.jpg);\n}\n',
  },
]
