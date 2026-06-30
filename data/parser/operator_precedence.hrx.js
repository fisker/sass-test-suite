// https://github.com/sass/sass-spec/blob/HEAD/spec/parser/operator_precedence.hrx

export default [
  {
    name: 'mixed/input.scss',
    data: '// Regression test for scssphp/scssphp#435\na {\n  b: true or 1 < 0 and false;\n}\n',
  },
  {
    name: 'mixed/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
