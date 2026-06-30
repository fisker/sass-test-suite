// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/067_test_mixin_splat_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a, $b, $c, $d) {\n  a: $a;\n  b: $b;\n  c: $c;\n  d: $d;\n}\n\n$list: 2, 3, 4;\n.foo {@include foo(1, $list...)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 1;\n  b: 2;\n  c: 3;\n  d: 4;\n}\n',
  },
]
