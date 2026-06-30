// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/089_test_function_splat_args_with_var_args_and_normal_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foo($a, $b, $c...) {\n  @return "a: #{$a}, b: #{$b}, c: #{$c}";\n}\n\n$list: 2, 3, 4;\n.foo {val: foo(1, $list...)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: "a: 1, b: 2, c: 3, 4";\n}\n',
  },
]
