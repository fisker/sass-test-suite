export default [
  {
    name: 'input.scss',
    data: '@function foo($a, $b...) {\n  @return "a: #{$a}, b: #{$b}";\n}\n\n.foo {val: foo(1, 2, 3, 4)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: "a: 1, b: 2, 3, 4";\n}\n',
  },
]
