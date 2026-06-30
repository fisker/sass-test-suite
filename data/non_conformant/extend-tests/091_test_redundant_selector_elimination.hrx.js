export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\n.x {@extend .foo, .bar}\n.y {@extend .foo, .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, .y, .x {\n  a: b;\n}\n',
  },
]
