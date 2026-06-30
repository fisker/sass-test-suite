// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/023_test_universal_unification_with_simple_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\n*|* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .bar {\n  a: b;\n}\n',
  },
]
