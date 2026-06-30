// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/005_test_unicode_variables.hrx

export default [
  {
    name: 'input.scss',
    data: '$vär: foo;\n\nblat {a: $vär}\n',
  },
  {
    name: 'output.css',
    data: 'blat {\n  a: foo;\n}\n',
  },
]
