// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/076_test_pseudo_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a .baz:after {a: b}\n:foo {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .baz:after, -a :foo:after {\n  a: b;\n}\n',
  },
]
