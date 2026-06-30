// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/181_test_three_level_extend_loop.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b; @extend .bar}\n.bar {c: d; @extend .baz}\n.baz {e: f; @extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .baz, .bar {\n  a: b;\n}\n\n.bar, .foo, .baz {\n  c: d;\n}\n\n.baz, .bar, .foo {\n  e: f;\n}\n',
  },
]
