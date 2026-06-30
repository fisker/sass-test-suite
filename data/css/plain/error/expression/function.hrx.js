// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/error/expression/function.hrx

export default [
  {
    name: 'built_in/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'built_in/plain.css',
    data: 'a {\n  x: index(1 2 3, 1);\n}\n',
  },
  {
    name: 'built_in/error',
    data: "Error: This function isn't allowed in plain CSS.\n  ,\n2 |   x: index(1 2 3, 1);\n  |      ^^^^^^^^^^^^^^^\n  '\n  plain.css 2:6   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'variable_arguments/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'variable_arguments/plain.css',
    data: 'a {\n  x: hsl(0, 100%, 50%...);\n}\n',
  },
  {
    name: 'variable_arguments/error',
    data: 'Error: expected ")".\n  ,\n2 |   x: hsl(0, 100%, 50%...);\n  |                      ^\n  \'\n  plain.css 2:22  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'keyword_arguments/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'keyword_arguments/plain.css',
    data: 'a {\n  x: hsl(0, 100%, $lightness: 50%);\n}\n',
  },
  {
    name: 'keyword_arguments/error',
    data: "Error: Sass variables aren't allowed in plain CSS.\n  ,\n2 |   x: hsl(0, 100%, $lightness: 50%);\n  |                   ^^^^^^^^^^\n  '\n  plain.css 2:19  @use\n  input.scss 1:1  root stylesheet\n",
  },
]
