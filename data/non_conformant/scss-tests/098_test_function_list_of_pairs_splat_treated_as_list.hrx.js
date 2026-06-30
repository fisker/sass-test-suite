export default [
  {
    name: 'input.scss',
    data: '@function foo($a, $b, $c) {\n  @return "a: #{$a}, b: #{$b}, c: #{$c}";\n}\n\n.foo {\n  val: foo((a 1, b 2, c 3)...);\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: "a: a 1, b: b 2, c: c 3";\n}\n',
  },
]
