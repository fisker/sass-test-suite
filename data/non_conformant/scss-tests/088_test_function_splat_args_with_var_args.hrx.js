// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/088_test_function_splat_args_with_var_args.hrx

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
