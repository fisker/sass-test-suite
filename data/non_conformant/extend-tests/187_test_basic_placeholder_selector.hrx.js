// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/187_test_basic_placeholder_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo {a: b}\n.bar {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
