// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/055_test_basic_mixins.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo {\n  .foo {a: b}}\n\nbar {\n  @include foo;\n  c: d; }\n',
  },
  {
    name: 'output.css',
    data: 'bar .foo {\n  a: b;\n}\nbar {\n  c: d;\n}\n',
  },
]
