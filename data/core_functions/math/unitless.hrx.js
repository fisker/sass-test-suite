// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/unitless.hrx

export default [
  {
    name: 'unitless/input.scss',
    data: '@use "sass:math";\na {b: math.is-unitless(1)}\n',
  },
  {
    name: 'unitless/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'numerator/input.scss',
    data: '@use "sass:math";\na {b: math.is-unitless(1px)}\n',
  },
  {
    name: 'numerator/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'denominator/input.scss',
    data: '@use "sass:math";\na {b: math.is-unitless(1/1px)}\n',
  },
  {
    name: 'denominator/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'denominator/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 1px)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.is-unitless(1/1px)}\n  |                        ^^^^^\n  '\n    input.scss 2:24  root stylesheet\n",
  },
  {
    name: 'numerator_and_denominator/input.scss',
    data: '@use "sass:math";\na {b: math.is-unitless(1px/1em)}\n',
  },
  {
    name: 'numerator_and_denominator/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'numerator_and_denominator/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1px, 1em)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.is-unitless(1px/1em)}\n  |                        ^^^^^^^\n  '\n    input.scss 2:24  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\na {b: math.is-unitless($number: 100)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:math";\na {b: math.unitless(1)}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: math.unitless(1)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.is-unitless(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $number: c is not a number.\n  ,\n2 | a {b: math.is-unitless(c)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.is-unitless()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.is-unitless()}\n  |       ^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function is-unitless($number) {\n  |           ==================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.is-unitless(1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.is-unitless(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function is-unitless($number) {\n  |           ==================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
