export default [
  {
    name: 'input.scss',
    data: 'a {\n  b: rgb();\n}\n',
  },
  {
    name: 'error',
    data: "Error: Missing argument $channels.\n  ,--> input.scss\n2 |   b: rgb();\n  |      ^^^^^ invocation\n  '\n  ,\n1 | @function rgb($channels) {\n  |           ============== declaration\n  '\n  input.scss 2:6  root stylesheet\n",
  },
]
