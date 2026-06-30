// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/004_test_basic.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {@extend .foo; c: d}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n\n.bar {\n  c: d;\n}\n',
  },
]
