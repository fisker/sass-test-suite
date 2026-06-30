// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/error/expression/map.hrx

export default [
  {
    name: 'input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'plain.css',
    data: 'a {\n  x: (y: z);\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n2 |   x: (y: z);\n  |        ^\n  \'\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n',
  },
]
