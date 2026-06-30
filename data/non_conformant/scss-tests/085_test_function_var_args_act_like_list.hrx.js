// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/085_test_function_var_args_act_like_list.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@function foo($a, $b...) {\n  @return "a: #{list.length($b)}, b: #{list.nth($b, 2)}";\n}\n\n.foo {val: foo(1, 2, 3, 4)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: "a: 3, b: 3";\n}\n',
  },
]
