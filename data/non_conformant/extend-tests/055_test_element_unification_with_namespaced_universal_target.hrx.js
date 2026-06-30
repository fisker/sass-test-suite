// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/055_test_element_unification_with_namespaced_universal_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a ns|*.foo {a: b}\nns|a {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|*.foo, -a ns|a {\n  a: b;\n}\n',
  },
]
