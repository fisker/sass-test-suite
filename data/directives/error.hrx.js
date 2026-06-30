export default [
  {
    name: 'sass/semicolon/input.sass',
    data: '@error a;\n',
  },
  {
    name: 'sass/semicolon/error',
    data: "Error: a\n  ,\n1 | @error a;\n  | ^^^^^^^^\n  '\n  input.sass 1:1  root stylesheet\n",
  },
  {
    name: 'sass/semicolon_comment/input.sass',
    data: '@error a; // b\n',
  },
  {
    name: 'sass/semicolon_comment/error',
    data: "Error: a\n  ,\n1 | @error a; // b\n  | ^^^^^^^^\n  '\n  input.sass 1:1  root stylesheet\n",
  },
  {
    name: 'sass/multiline_after/input.sass',
    data: '@error\na\n',
  },
  {
    name: 'sass/multiline_after/error',
    data: "Error: a\n  ,\n1 | / @error\n2 | \\ a\n  '\n  input.sass 1:1  root stylesheet\n",
  },
]
