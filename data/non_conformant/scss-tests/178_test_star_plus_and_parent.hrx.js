export default [
  {
    name: 'input.scss',
    data: 'foo {*+html & {a: b}}\n',
  },
  {
    name: 'output.css',
    data: '* + html foo {\n  a: b;\n}\n',
  },
]
