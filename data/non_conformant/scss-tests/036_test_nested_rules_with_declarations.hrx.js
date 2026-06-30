// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/036_test_nested_rules_with_declarations.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar {c: d}\n  a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar {\n  c: d;\n}\nfoo {\n  a: b;\n}\n',
  },
]
