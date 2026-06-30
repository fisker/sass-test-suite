export default [
  {
    name: 'input.scss',
    data: '@foo {\n  a: b; }\n\n@bar {\n  a: b; }\n',
  },
  {
    name: 'output.css',
    data: '@foo {\n  a: b;\n}\n@bar {\n  a: b;\n}\n',
  },
]
