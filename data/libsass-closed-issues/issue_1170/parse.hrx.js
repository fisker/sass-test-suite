export default [
  {
    name: 'input.scss',
    data: "el {\n  @if (& + '' == 'el') {\n    content: \"It works!\";\n  }\n}",
  },
  {
    name: 'output.css',
    data: 'el {\n  content: "It works!";\n}\n',
  },
]
