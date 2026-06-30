export default [
  {
    name: 'input.scss',
    data: '@function foo($x, $y) { @return null }\n\na {\n  b: foo(1 2 3...);\n}',
  },
  {
    name: 'warning',
    data: 'WARNING: Function foo takes 2 arguments but 3 were passed.\n        on line 4 of input.scss\nThis will be an error in future versions of Sass.',
  },
  {
    name: 'error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n    ,\n1   | @function foo($x, $y) { @return null }\n    |           =========== declaration\n... |\n4   |   b: foo(1 2 3...);\n    |      ^^^^^^^^^^^^^ invocation\n    '\n  input.scss 4:6  foo()\n  input.scss 4:6  root stylesheet\n",
  },
]
