// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/nesting/not.hrx

export default [
  {
    name: 'multiple_parent_selectors_with_trailing_ident/input.scss',
    data: '// Regression test for sass/libsass#2630\n.a, .b {\n  :not(&-c) {d: e}\n}\n',
  },
  {
    name: 'multiple_parent_selectors_with_trailing_ident/output.css',
    data: ':not(.a-c, .b-c) {\n  d: e;\n}\n',
  },
]
