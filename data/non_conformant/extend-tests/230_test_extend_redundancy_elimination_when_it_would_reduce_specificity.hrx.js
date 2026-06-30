// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/230_test_extend_redundancy_elimination_when_it_would_reduce_specificity.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {a: b}\na.foo {@extend a}\n',
  },
  {
    name: 'output.css',
    data: 'a, a.foo {\n  a: b;\n}\n',
  },
]
