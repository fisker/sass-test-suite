// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/232_test_extend_redundancy_elimination_never_eliminates_base_selector.hrx

export default [
  {
    name: 'input.scss',
    data: 'a.foo {a: b}\n.foo {@extend a}\n',
  },
  {
    name: 'output.css',
    data: 'a.foo, .foo {\n  a: b;\n}\n',
  },
]
