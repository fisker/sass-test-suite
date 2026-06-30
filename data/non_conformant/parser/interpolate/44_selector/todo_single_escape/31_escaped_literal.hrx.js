export default [
  {
    name: 'input.scss',
    data: ".test31#{'\\@baz'} { content: '3.1'; }\n",
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,--> input.scss\n1 | .test31#{'\\@baz'} { content: '3.1'; }\n  |          ^^^^^^^ \n  '\n  ,\n1 | .test31@baz \n  |        = error in interpolated output\n  '\n  input.scss 1:10  root stylesheet\n",
  },
]
