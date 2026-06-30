// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/003_test_variables.hrx

export default [
  {
    name: 'input.scss',
    data: '$var: foo;\n\nblat {a: $var}\n',
  },
  {
    name: 'output.css',
    data: 'blat {\n  a: foo;\n}\n',
  },
]
