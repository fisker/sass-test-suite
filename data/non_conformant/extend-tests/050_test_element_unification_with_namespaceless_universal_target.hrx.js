// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/050_test_element_unification_with_namespaceless_universal_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a *|*.foo {a: b}\n*|a {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a *|*.foo, -a *|a {\n  a: b;\n}\n',
  },
]
