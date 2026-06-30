// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/032_test_nested_rules.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {bar {a: b}}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar {\n  a: b;\n}\n',
  },
]
