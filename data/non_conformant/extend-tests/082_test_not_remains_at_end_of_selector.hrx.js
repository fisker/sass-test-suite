// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/082_test_not_remains_at_end_of_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo:not(.bar) {a: b}\n.baz {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo:not(.bar), .baz:not(.bar) {\n  a: b;\n}\n',
  },
]
