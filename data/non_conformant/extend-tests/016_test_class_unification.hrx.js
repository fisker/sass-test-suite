// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/016_test_class_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\n.baz {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .foo.bar, -a .bar.baz {\n  a: b;\n}\n',
  },
]
