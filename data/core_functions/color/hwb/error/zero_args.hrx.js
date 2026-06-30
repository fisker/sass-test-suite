export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.hwb()}\n',
  },
  {
    name: 'error',
    data: "Error: Missing argument $channels.\n  ,--> input.scss\n2 | a {b: color.hwb()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,\n1 | @function hwb($channels) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
