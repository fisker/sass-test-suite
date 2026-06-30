export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\n@debug(selector.nest("foo", null));\n',
  },
  {
    name: 'error',
    data: 'Error: null is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | @debug(selector.nest("foo", null));\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:8  root stylesheet\n',
  },
]
