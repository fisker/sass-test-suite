// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/180_test_basic_extend_loop.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b; @extend .bar}\n.bar {c: d; @extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n\n.bar, .foo {\n  c: d;\n}\n',
  },
]
