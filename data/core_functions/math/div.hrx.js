export default [
  {
    name: 'unitless/whole/input.scss',
    data: '@use "sass:math";\na {b: math.div(6, 3)}\n',
  },
  {
    name: 'unitless/whole/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'unitless/fraction/input.scss',
    data: '@use "sass:math";\na {b: math.div(6, 5)}\n',
  },
  {
    name: 'unitless/fraction/output.css',
    data: 'a {\n  b: 1.2;\n}\n',
  },
  {
    name: 'unitless/named/input.scss',
    data: '@use "sass:math";\na {b: math.div($number2: 3, $number1: 6)}\n',
  },
  {
    name: 'unitless/named/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'unit/README.md',
    data: 'More thorough specs for unit arithmetic in Sass live in spec/values/numbers.\nThese specs are just designed to verify that the `math.div()` function produces\nthe appropriate numbers.\n',
  },
  {
    name: 'unit/numerator/input.scss',
    data: '@use "sass:math";\na {b: math.div(6px, 3)}\n',
  },
  {
    name: 'unit/numerator/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'unit/denominator/input.scss',
    data: '@use "sass:math";\na {b: math.div(6, 3px) * 1px}\n',
  },
  {
    name: 'unit/denominator/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'unit/same/input.scss',
    data: '@use "sass:math";\na {b: math.div(6px, 3px)}\n',
  },
  {
    name: 'unit/same/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'unit/compatible/input.scss',
    data: '@use "sass:math";\na {b: math.div(6in, 3px)}\n',
  },
  {
    name: 'unit/compatible/output.css',
    data: 'a {\n  b: 192;\n}\n',
  },
  {
    name: 'unit/incompatible/input.scss',
    data: '@use "sass:math";\na {b: math.div(6in, 3s) * 1s}\n',
  },
  {
    name: 'unit/incompatible/output.css',
    data: 'a {\n  b: 2in;\n}\n',
  },
  {
    name: 'unit/unknown/input.scss',
    data: '@use "sass:math";\na {b: math.div(6c, 3d) * 1d}\n',
  },
  {
    name: 'unit/unknown/output.css',
    data: 'a {\n  b: 2c;\n}\n',
  },
  {
    name: 'non_numeric/numerator/input.scss',
    data: '@use "sass:meta";\n@use "sass:math";\na {\n  $result: math.div(b, 3);\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'non_numeric/numerator/output.css',
    data: 'a {\n  value: b/3;\n  type: string;\n}\n',
  },
  {
    name: 'non_numeric/numerator/warning',
    data: "WARNING: math.div() will only support number arguments in a future release.\nUse list.slash() instead for a slash separator.\n\n  ,\n4 |   $result: math.div(b, 3);\n  |            ^^^^^^^^^^^^^^\n  '\n    input.scss 4:12  root stylesheet\n",
  },
  {
    name: 'non_numeric/denominator/input.scss',
    data: '@use "sass:meta";\n@use "sass:math";\na {\n  $result: math.div(6, b);\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'non_numeric/denominator/output.css',
    data: 'a {\n  value: 6/b;\n  type: string;\n}\n',
  },
  {
    name: 'non_numeric/denominator/warning',
    data: "WARNING: math.div() will only support number arguments in a future release.\nUse list.slash() instead for a slash separator.\n\n  ,\n4 |   $result: math.div(6, b);\n  |            ^^^^^^^^^^^^^^\n  '\n    input.scss 4:12  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.div(6)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number2.\n  ,--> input.scss\n2 | a {b: math.div(6)}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function div($number1, $number2) {\n  |           ======================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.div(6, 3, 1)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: math.div(6, 3, 1)}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function div($number1, $number2) {\n  |           ======================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
