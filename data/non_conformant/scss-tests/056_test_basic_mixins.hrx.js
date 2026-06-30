// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/056_test_basic_mixins.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo {a: b}\n\nbar {\n  @include foo;\n  c: d; }\n',
  },
  {
    name: 'output.css',
    data: 'bar {\n  a: b;\n  c: d;\n}\n',
  },
]
