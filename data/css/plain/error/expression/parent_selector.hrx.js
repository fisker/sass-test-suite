// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/error/expression/parent_selector.hrx

export default [
  {
    name: 'input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'plain.css',
    data: 'a {\n  x: &;\n}\n',
  },
  {
    name: 'error',
    data: "Error: The parent selector isn't allowed in plain CSS.\n  ,\n2 |   x: &;\n  |      ^\n  '\n  plain.css 2:6   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
