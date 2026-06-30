// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/054_test_basic_mixins.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo {\n  .foo {a: b}}\n\n@include foo;\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
