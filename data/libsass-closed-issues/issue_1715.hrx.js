export default [
  {
    name: 'input.scss',
    data: 'div {\n  color: red(blue, purple);\n}',
  },
  {
    name: 'error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 |   color: red(blue, purple);\n  |          ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function red($color) {\n  |           =========== declaration\n  '\n  input.scss 2:10  root stylesheet\n",
  },
]
