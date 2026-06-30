// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/216_test_nested_sibling_extend.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {@extend .bar}\n\n.parent {\n.bar {\n  width: 2000px;\n}\n.foo {\n  @extend .bar\n}\n}\n',
  },
  {
    name: 'output.css',
    data: '.parent .bar, .parent .foo {\n  width: 2000px;\n}\n',
  },
]
