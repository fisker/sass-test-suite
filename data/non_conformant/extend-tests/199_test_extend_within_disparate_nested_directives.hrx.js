// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/199_test_extend_within_disparate_nested_directives.hrx

export default [
  {
    name: 'input.scss',
    data: '@media screen {@flooblehoof {.foo {a: b}}}\n@media screen {@flooblehoof {.bar {@extend .foo}}}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  @flooblehoof {\n    .foo, .bar {\n      a: b;\n    }\n  }\n}\n@media screen {\n  @flooblehoof {}\n}\n',
  },
]
