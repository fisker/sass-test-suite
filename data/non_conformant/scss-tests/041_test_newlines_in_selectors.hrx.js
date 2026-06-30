// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/041_test_newlines_in_selectors.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo,\nbar {\n  baz,\n  bang {a: b}}\n',
  },
  {
    name: 'output.css',
    data: 'foo baz,\nfoo bang,\nbar baz,\nbar bang {\n  a: b;\n}\n',
  },
]
