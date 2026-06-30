// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass_4_0/color_arithmetic/division/color_number.hrx

export default [
  {
    name: 'input.scss',
    data: '$v: #abc / 1;\n',
  },
  {
    name: 'error',
    data: 'Error: Undefined operation "#abc / 1".\n  ,\n1 | $v: #abc / 1;\n  |     ^^^^^^^^\n  \'\n  input.scss 1:5  root stylesheet\n',
  },
]
