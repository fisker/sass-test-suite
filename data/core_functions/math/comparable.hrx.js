export default [
  {
    name: 'unitless/to_unitless/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1, 2)}\n',
  },
  {
    name: 'unitless/to_unitless/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unitless/to_unit/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1, 2px)}\n',
  },
  {
    name: 'unitless/to_unit/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unit/to_same/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1px, 2px)}\n',
  },
  {
    name: 'unit/to_same/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unit/to_compatible/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1px, 2in)}\n',
  },
  {
    name: 'unit/to_compatible/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unit/to_different/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1px, 2em)}\n',
  },
  {
    name: 'unit/to_different/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unit/to_inverse/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1px, 1/1px)}\n',
  },
  {
    name: 'unit/to_inverse/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unit/to_inverse/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 1px)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.compatible(1px, 1/1px)}\n  |                            ^^^^^\n  '\n    input.scss 2:28  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\na {b: math.compatible($number1: 1, $number2: 2)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:math";\na {b: math.comparable(1px, 1in)}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: math.comparable(1px, 1in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/arg_1/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(c, 1)}\n',
  },
  {
    name: 'error/type/arg_1/error',
    data: "Error: $number1: c is not a number.\n  ,\n2 | a {b: math.compatible(c, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/arg_2/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1, c)}\n',
  },
  {
    name: 'error/type/arg_2/error',
    data: "Error: $number2: c is not a number.\n  ,\n2 | a {b: math.compatible(1, c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number2.\n  ,--> input.scss\n2 | a {b: math.compatible(1)}\n  |       ^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function compatible($number1, $number2) {\n  |           ============================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.compatible(1, 2, 3)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: math.compatible(1, 2, 3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function compatible($number1, $number2) {\n  |           ============================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
