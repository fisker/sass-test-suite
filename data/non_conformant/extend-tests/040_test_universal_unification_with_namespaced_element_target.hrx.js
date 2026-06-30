// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/040_test_universal_unification_with_namespaced_element_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a ns|a.foo {a: b}\n* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|a.foo {\n  a: b;\n}\n',
  },
]
