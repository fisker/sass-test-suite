// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/error/zero_args.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  b: hsl();\n}\n',
  },
  {
    name: 'error',
    data: "Error: Missing argument $channels.\n  ,--> input.scss\n2 |   b: hsl();\n  |      ^^^^^ invocation\n  '\n  ,\n1 | @function hsl($channels) {\n  |           ============== declaration\n  '\n  input.scss 2:6  root stylesheet\n",
  },
]
