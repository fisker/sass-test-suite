export default [
  {
    name: 'input.scss',
    data: '%btn-style-default {\n  background: green;\n  &:hover{\n    background: black;\n  }\n}\n\nbutton {\n  @extend %btn-style-default;\n}',
  },
  {
    name: 'output.css',
    data: 'button {\n  background: green;\n}\nbutton:hover {\n  background: black;\n}\n',
  },
]
