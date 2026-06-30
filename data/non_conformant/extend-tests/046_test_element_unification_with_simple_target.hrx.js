// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/046_test_element_unification_with_simple_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\nns|a {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .foo.bar, -a ns|a.bar {\n  a: b;\n}\n',
  },
]
