// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/053_test_element_unification_with_namespaced_universal_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a ns|*.foo {a: b}\na {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|*.foo {\n  a: b;\n}\n',
  },
]
