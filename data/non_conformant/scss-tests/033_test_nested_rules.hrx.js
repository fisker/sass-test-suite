// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/033_test_nested_rules.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar {a: b}\n  baz {b: c}}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar {\n  a: b;\n}\nfoo baz {\n  b: c;\n}\n',
  },
]
