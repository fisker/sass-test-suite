// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/045_test_element_unification_with_simple_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\n*|a {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .foo.bar, -a *|a.bar {\n  a: b;\n}\n',
  },
]
