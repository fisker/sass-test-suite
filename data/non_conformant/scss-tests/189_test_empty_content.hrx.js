// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/189_test_empty_content.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo { @content }\na { b: c; @include foo {} }\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
