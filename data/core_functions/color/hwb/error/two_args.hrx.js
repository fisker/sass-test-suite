// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hwb/error/two_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.hwb(#123, 0.5)}\n',
  },
  {
    name: 'error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: color.hwb(#123, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,\n1 | @function hwb($channels) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
