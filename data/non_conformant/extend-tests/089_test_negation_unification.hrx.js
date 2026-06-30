// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/089_test_negation_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a :not([a=b]).baz {a: b}\n:not([a = b]) {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a :not([a=b]) {\n  a: b;\n}\n',
  },
]
