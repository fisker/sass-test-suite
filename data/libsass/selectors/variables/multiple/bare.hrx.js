export default [
  {
    name: 'input.scss',
    data: '.foo a,\n.bar p {\n  $bar: &;\n  content: $bar;\n}',
  },
  {
    name: 'output.css',
    data: '.foo a,\n.bar p {\n  content: .foo a, .bar p;\n}\n',
  },
]
