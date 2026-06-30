export default [
  {
    name: 'input.scss',
    data: '%button-styles {\n  color: red;\n\n  &:focus {\n    color: blue;\n  }\n}\n\n[type="button"] {\n  @extend %button-styles;\n}\n\n',
  },
  {
    name: 'output.css',
    data: '[type=button] {\n  color: red;\n}\n[type=button]:focus {\n  color: blue;\n}\n',
  },
]
