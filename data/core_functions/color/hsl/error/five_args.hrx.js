// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/error/five_args.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  b: hsl(0, 100%, 50%, 0.5, 0);\n}\n',
  },
  {
    name: 'error',
    data: "Error: Only 4 arguments allowed, but 5 were passed.\n  ,--> input.scss\n2 |   b: hsl(0, 100%, 50%, 0.5, 0);\n  |      ^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,\n1 | @function hsl($hue, $saturation, $lightness, $alpha) {\n  |           ========================================== declaration\n  '\n  input.scss 2:6  root stylesheet\n",
  },
]
