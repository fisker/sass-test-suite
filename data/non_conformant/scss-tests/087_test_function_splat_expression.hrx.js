export default [
  {
    name: 'input.scss',
    data: '@function foo($a, $b, $c, $d) {\n  @return "a: #{$a}, b: #{$b}, c: #{$c}, d: #{$d}";\n}\n\n.foo {val: foo(1, (2, 3, 4)...)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: "a: 1, b: 2, c: 3, d: 4";\n}\n',
  },
]
