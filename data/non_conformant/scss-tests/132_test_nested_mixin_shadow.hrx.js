// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/132_test_nested_mixin_shadow.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin bar {a: b}\n\nfoo {\n  @mixin bar {c: d}\n  @include bar;\n}\n\nbaz {@include bar}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  c: d;\n}\n\nbaz {\n  a: b;\n}\n',
  },
]
