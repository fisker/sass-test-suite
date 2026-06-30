// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/097_test_nested_extender.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\nfoo bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo, foo bar {\n  a: b;\n}\n',
  },
]
