export default [
  {
    name: 'options.yml',
    data: ':todo:\n  - dart-sass\n',
  },
  {
    name: 'input.scss',
    data: 'a b {\n  @extend %c;\n}\n\na > b {\n  @extend %c;\n}\n\n%c {\n  color: red;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a b {\n  color: red;\n}\n',
  },
]
