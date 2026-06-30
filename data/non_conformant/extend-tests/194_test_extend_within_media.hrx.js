// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/194_test_extend_within_media.hrx

export default [
  {
    name: 'input.scss',
    data: '@media screen {\n.foo {a: b}\n.bar {@extend .foo}\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  .foo, .bar {\n    a: b;\n  }\n}\n',
  },
]
