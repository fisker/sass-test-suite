// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/032_test_universal_unification_with_namespaced_universal_target.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a ns|*.foo {a: b}\n*|* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|* {\n  a: b;\n}\n',
  },
]
