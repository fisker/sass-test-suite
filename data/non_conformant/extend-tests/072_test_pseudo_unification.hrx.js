// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/072_test_pseudo_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a ::foo.baz {a: b}\n::foo {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ::foo {\n  a: b;\n}\n',
  },
]
