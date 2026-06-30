export default [
  {
    name: 'input.scss',
    data: 'a ~ b c .c1 {a: b}\na b .c2 {@extend .c1}\n',
  },
  {
    name: 'output.css',
    data: 'a ~ b c .c1, a a ~ b c .c2 {\n  a: b;\n}\n',
  },
]
