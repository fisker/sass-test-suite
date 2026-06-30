export default [
  {
    name: 'input.scss',
    data: 'a.a + x {a: b}\nb.b ~ y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: 'a.a + x, b.b ~ a.a + y {\n  a: b;\n}\n',
  },
]
