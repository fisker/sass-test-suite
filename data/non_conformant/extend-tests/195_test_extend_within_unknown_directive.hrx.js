// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/195_test_extend_within_unknown_directive.hrx

export default [
  {
    name: 'input.scss',
    data: '@flooblehoof {\n.foo {a: b}\n.bar {@extend .foo}\n}\n',
  },
  {
    name: 'output.css',
    data: '@flooblehoof {\n  .foo, .bar {\n    a: b;\n  }\n}\n',
  },
]
