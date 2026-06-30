// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/44_selector/todo_single_escape/21_escaped_interpolated_variable.hrx

export default [
  {
    name: 'input.scss',
    data: "$key: 'bar';\n$suffix1: '\\@#{$key}';\n.test21#{$suffix1} { content: '2.1'; }\n",
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,--> input.scss\n3 | .test21#{$suffix1} { content: '2.1'; }\n  |          ^^^^^^^^ \n  '\n  ,\n1 | .test21@bar \n  |        = error in interpolated output\n  '\n  input.scss 3:10  root stylesheet\n",
  },
]
