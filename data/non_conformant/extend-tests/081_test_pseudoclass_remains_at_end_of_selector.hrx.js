// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/081_test_pseudoclass_remains_at_end_of_selector.hrx

export default [
  {
    name: 'input.scss',
    data: 'a.foo:bar {a: b}\n.baz {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: 'a.foo:bar, a.baz:bar {\n  a: b;\n}\n',
  },
]
