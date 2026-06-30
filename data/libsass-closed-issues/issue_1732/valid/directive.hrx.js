export default [
  {
    name: 'input.scss',
    data: '@media all {\n  .foo {\n\tcolor: red;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '@media all {\n  .foo {\n    color: red;\n  }\n}\n',
  },
]
