// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass_4_0/color_arithmetic/multiplication/color_color.hrx

export default [
  {
    name: 'input.scss',
    data: '$v: #abc * #123;\n',
  },
  {
    name: 'error',
    data: 'Error: Undefined operation "#abc * #123".\n  ,\n1 | $v: #abc * #123;\n  |     ^^^^^^^^^^^\n  \'\n  input.scss 1:5  root stylesheet\n',
  },
]
