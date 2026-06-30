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
