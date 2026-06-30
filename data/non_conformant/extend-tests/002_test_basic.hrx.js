// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/002_test_basic.hrx

export default [
  {
    name: 'input.scss',
    data: '.bar {@extend .foo}\n.foo {a: b}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n',
  },
]
