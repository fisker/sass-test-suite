// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/014_test_nested_target.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo .bar {a: b}\n.baz {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo .baz {\n  a: b;\n}\n',
  },
]
