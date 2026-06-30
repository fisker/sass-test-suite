// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/087_test_negation_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a :not(.foo).baz {a: b}\n:not(.bar) {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a :not(.foo).baz, -a :not(.foo):not(.bar) {\n  a: b;\n}\n',
  },
]
