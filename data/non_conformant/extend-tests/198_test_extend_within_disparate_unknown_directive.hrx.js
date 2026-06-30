// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/198_test_extend_within_disparate_unknown_directive.hrx

export default [
  {
    name: 'input.scss',
    data: '@flooblehoof {.foo {a: b}}\n@flooblehoof {.bar {@extend .foo}}\n',
  },
  {
    name: 'output.css',
    data: '@flooblehoof {\n  .foo, .bar {\n    a: b;\n  }\n}\n@flooblehoof {}\n',
  },
]
