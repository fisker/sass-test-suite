// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/229_test_extended_parent_and_child_redundancy_elimination.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\nb {a: b}\nc {@extend b}\n}\nd {@extend a}\n',
  },
  {
    name: 'output.css',
    data: 'a b, d b, a c, d c {\n  a: b;\n}\n',
  },
]
