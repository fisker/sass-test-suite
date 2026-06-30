export default [
  {
    name: 'input.scss',
    data: '.a + x {a: b}\n.a.b + y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a + x, .a.b + y {\n  a: b;\n}\n',
  },
]
