// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/103_test_function_var_args_passed_to_native.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n@function foo($args...) {\n  @return color.adjust($args...);\n}\n\n.foo {val: foo(#102030, $blue: 5)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  val: #102035;\n}\n',
  },
]
