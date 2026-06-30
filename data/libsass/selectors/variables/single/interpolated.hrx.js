export default [
  {
    name: 'input.scss',
    data: '.foo {\n  $bar: &;\n  content: #{$bar};\n}',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: .foo;\n}\n',
  },
]
