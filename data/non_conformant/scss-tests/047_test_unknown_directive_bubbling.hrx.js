// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/047_test_unknown_directive_bubbling.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @fblthp {\n    .bar {a: b}\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@fblthp {\n  .foo .bar {\n    a: b;\n  }\n}\n',
  },
]
