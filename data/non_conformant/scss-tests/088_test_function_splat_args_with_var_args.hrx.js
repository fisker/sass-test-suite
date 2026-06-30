export default [
  {
    name: 'input.scss',
    data: '@function foo($a, $b...) {\n  @return "a: #{$a}, b: #{$b}";\n}\n\n$list: 2, 3, 4;\n.foo {val: foo(1, $list...)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: "a: 1, b: 2, 3, 4";\n}\n',
  },
]
