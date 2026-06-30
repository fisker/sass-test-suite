// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/038_test_universal_unification_with_namespaceless_element_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a a.foo {a: b}\nns|* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a a.foo {\n  a: b;\n}\n',
  },
]
