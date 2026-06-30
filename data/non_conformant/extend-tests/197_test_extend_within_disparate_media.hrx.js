// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/197_test_extend_within_disparate_media.hrx

export default [
  {
    name: 'input.scss',
    data: '@media screen {.foo {a: b}}\n@media screen {.bar {@extend .foo}}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  .foo, .bar {\n    a: b;\n  }\n}\n',
  },
]
