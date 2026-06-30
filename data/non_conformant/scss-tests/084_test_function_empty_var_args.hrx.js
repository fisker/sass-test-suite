export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@function foo($a, $b...) {\n  @return "a: #{$a}, b: #{list.length($b)}";\n}\n\n.foo {val: foo(1)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: "a: 1, b: 0";\n}\n',
  },
]
