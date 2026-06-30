export default [
  {
    name: 'input.scss',
    data: '@at-root {\n  &post {\n    foo {\n      bar: baz;\n    }\n  }\n}',
  },
  {
    name: 'error',
    data: "Error: A top-level selector may not contain a parent selector with a suffix.\n  ,\n2 |   &post {\n  |   ^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
