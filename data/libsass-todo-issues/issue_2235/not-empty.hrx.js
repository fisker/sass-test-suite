export default [
  {
    name: 'input.scss',
    data: '@media all and (min-width: 100px) {\n  a { b: c }\n  @import "https://example.org";\n}\n',
  },
  {
    name: 'output.css',
    data: '@media all and (min-width: 100px) {\n  a {\n    b: c;\n  }\n\n  @import "https://example.org";\n}\n',
  },
]
