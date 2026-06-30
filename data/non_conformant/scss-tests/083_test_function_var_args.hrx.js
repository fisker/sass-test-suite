// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/083_test_function_var_args.hrx

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
