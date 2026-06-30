export default [
  {
    name: 'input.scss',
    data: '@mixin __a() {b: c}\nd {@include __a}\n',
  },
  {
    name: 'output.css',
    data: 'd {\n  b: c;\n}\n',
  },
]
