// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/069_test_attribute_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a %-a [foo=bar].bar {a: b}\n[foo=bar] {@extend .bar} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a -a [foo=bar] {\n  a: b;\n}\n',
  },
]
