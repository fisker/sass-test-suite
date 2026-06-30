export default [
  {
    name: 'input.scss',
    data: '.a.b > x {a: b}\n.a y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a.b > x, .a.b > y {\n  a: b;\n}\n',
  },
]
