// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/error/expression/parentheses.hrx

export default [
  {
    name: 'input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'plain.css',
    data: 'a {\n  x: (y);\n}\n',
  },
  {
    name: 'error',
    data: "Error: Parentheses aren't allowed in plain CSS.\n  ,\n2 |   x: (y);\n  |      ^^^\n  '\n  plain.css 2:6   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
