// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/44_selector/todo_single_escape/11_escaped_interpolated_value.hrx

export default [
  {
    name: 'input.scss',
    data: "$key: 'bar';\n.test11#{'\\@#{$key}'} { content: '1.1'; }\n",
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,--> input.scss\n2 | .test11#{'\\@#{$key}'} { content: '1.1'; }\n  |          ^^^^^^^^^^^ \n  '\n  ,\n1 | .test11@bar \n  |        = error in interpolated output\n  '\n  input.scss 2:10  root stylesheet\n",
  },
]
