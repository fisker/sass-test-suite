// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/056_test_element_unification_with_namespaceless_element_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a a.foo {a: b}\na {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a a {\n  a: b;\n}\n',
  },
]
