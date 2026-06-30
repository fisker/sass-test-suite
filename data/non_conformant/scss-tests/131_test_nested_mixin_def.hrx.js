// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/131_test_nested_mixin_def.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @mixin bar {a: b}\n  @include bar; }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: b;\n}\n',
  },
]
