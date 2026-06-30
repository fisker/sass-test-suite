// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/nesting/parent_with_newline.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo,\n.bar {\n  .baz & {\n    color: red;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.baz .foo,\n.baz .bar {\n  color: red;\n}\n',
  },
]
