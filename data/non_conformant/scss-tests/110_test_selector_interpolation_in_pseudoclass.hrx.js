// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/110_test_selector_interpolation_in_pseudoclass.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo:nth-child(#{5 + "n"}) {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo:nth-child(5n) {\n  a: b;\n}\n',
  },
]
