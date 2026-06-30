export default [
  {
    name: 'input.scss',
    data: '@media screen {\n  a { x:y; }\n  @page {}\n}',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  a {\n    x: y;\n  }\n\n  @page {}\n}\n',
  },
]
