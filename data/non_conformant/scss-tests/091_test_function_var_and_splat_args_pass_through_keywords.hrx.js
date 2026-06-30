export default [
  {
    name: 'input.scss',
    data: '@function foo($a...) {\n  @return bar($a...);\n}\n\n@function bar($b, $c, $a) {\n  @return "a: #{$a}, b: #{$b}, c: #{$c}";\n}\n\n.foo {val: foo(1, $c: 2, $a: 3)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: "a: 3, b: 1, c: 2";\n}\n',
  },
]
