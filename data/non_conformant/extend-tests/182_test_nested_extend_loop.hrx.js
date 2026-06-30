// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/182_test_nested_extend_loop.hrx

export default [
  {
    name: 'input.scss',
    data: '.bar {\na: b;\n.foo {c: d; @extend .bar}\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar, .bar .foo {\n  a: b;\n}\n.bar .foo {\n  c: d;\n}\n',
  },
]
