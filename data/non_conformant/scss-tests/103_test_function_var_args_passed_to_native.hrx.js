export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n@function foo($args...) {\n  @return color.adjust($args...);\n}\n\n.foo {val: foo(#102030, $blue: 5)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: #102035;\n}\n',
  },
]
