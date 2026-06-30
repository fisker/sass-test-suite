// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/078_test_mixin_list_of_pairs_splat_treated_as_list.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a, $b, $c) {\n  a: $a;\n  b: $b;\n  c: $c;\n}\n\n.foo {\n  @include foo((a 1, b 2, c 3)...);\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: a 1;\n  b: b 2;\n  c: c 3;\n}\n',
  },
]
