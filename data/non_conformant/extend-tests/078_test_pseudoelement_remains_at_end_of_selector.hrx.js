// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/078_test_pseudoelement_remains_at_end_of_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo::bar {a: b}\n.baz {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo::bar, .baz::bar {\n  a: b;\n}\n',
  },
]
