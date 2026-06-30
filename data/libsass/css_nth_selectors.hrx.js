export default [
  {
    name: 'input.scss',
    data: ':nth-child(2n + 3) {\n  outer-whitespace: false;\n}\n\n// Regression test for sass/dart-sass#465.\n:nth-child( 2n + 3 ) {\n  outer-whitespace: true;\n}\n',
  },
  {
    name: 'output.css',
    data: ':nth-child(2n+3) {\n  outer-whitespace: false;\n}\n\n:nth-child(2n+3) {\n  outer-whitespace: true;\n}\n',
  },
]
