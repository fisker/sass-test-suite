// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/02_simple_nesting.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  img {\n    border: 0px;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'div img {\n  border: 0px;\n}\n',
  },
]
