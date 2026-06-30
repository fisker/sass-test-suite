// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/001_test_basic.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n',
  },
]
