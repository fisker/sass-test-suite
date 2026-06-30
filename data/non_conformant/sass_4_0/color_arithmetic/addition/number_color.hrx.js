// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass_4_0/color_arithmetic/addition/number_color.hrx

export default [
  {
    name: 'input.scss',
    data: '$v: 1 + #123;\n',
  },
  {
    name: 'error',
    data: 'Error: Undefined operation "1 + #123".\n  ,\n1 | $v: 1 + #123;\n  |     ^^^^^^^^\n  \'\n  input.scss 1:5  root stylesheet\n',
  },
]
