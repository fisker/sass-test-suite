// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/035_test_nested_rules_with_declarations.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  a: b;\n  bar {c: d}}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: b;\n}\nfoo bar {\n  c: d;\n}\n',
  },
]
