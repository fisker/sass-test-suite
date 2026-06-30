// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/231_test_extend_redundancy_elimination_when_it_would_preserve_specificity.hrx

export default [
  {
    name: 'input.scss',
    data: '.bar a {a: b}\na.foo {@extend a}\n',
  },
  {
    name: 'output.css',
    data: '.bar a {\n  a: b;\n}\n',
  },
]
