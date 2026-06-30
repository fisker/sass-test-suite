// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/024_test_universal_unification_with_simple_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\nns|* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .foo.bar, -a ns|*.bar {\n  a: b;\n}\n',
  },
]
