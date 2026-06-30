// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/03_simple_variable.hrx

export default [
  {
    name: 'input.scss',
    data: '$color: red;\n\na {\n  color: $color;\n}',
  },
  {
    name: 'output.css',
    data: 'a {\n  color: red;\n}\n',
  },
]
