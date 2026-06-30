// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/186_test_newlines_removed_from_selectors_when_compressed.hrx

export default [
  {
    name: 'input.scss',
    data: 'a\n, b {\n  z & {\n    display: block;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'z a,\nz b {\n  display: block;\n}\n',
  },
]
