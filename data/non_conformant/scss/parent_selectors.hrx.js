// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/parent_selectors.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  &:hover {a: b}\n  bar &.baz {c: d}}\n',
  },
  {
    name: 'output.css',
    data: 'foo:hover {\n  a: b;\n}\nbar foo.baz {\n  c: d;\n}\n',
  },
]
