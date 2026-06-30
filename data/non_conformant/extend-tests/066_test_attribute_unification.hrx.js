// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/066_test_attribute_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a [foo=bar].baz {a: b}\n[foo^=bar] {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a [foo=bar].baz, -a [foo=bar][foo^=bar] {\n  a: b;\n}\n',
  },
]
