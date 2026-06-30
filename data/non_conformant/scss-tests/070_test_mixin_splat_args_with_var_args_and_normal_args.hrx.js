// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/070_test_mixin_splat_args_with_var_args_and_normal_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a, $b, $c...) {\n  a: $a;\n  b: $b;\n  c: $c;\n}\n\n$list: 2, 3, 4;\n.foo {@include foo(1, $list...)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 1;\n  b: 2;\n  c: 3, 4;\n}\n',
  },
]
