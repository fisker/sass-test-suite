// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/042_test_newlines_in_selectors.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo\nbar {\n  baz\n  bang {a: b}\n\n  bip bop {c: d}}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar baz bang {\n  a: b;\n}\nfoo bar bip bop {\n  c: d;\n}\n',
  },
]
