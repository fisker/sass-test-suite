export default [
  {
    name: 'input.scss',
    data: '.a + x {a: b}\n.b ~ y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a + x, .b ~ .a + y, .b.a + y {\n  a: b;\n}\n',
  },
]
