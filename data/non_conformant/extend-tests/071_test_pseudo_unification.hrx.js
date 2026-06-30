// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/071_test_pseudo_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a :foo.baz {a: b}\n::foo {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a :foo.baz, -a :foo::foo {\n  a: b;\n}\n',
  },
]
