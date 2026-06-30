// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/unit.hrx

export default [
  {
    name: 'README.md',
    data: 'This function is intended for debugging and as such is not required to have\ntotally consistent output across different implementations.\n',
  },
  {
    name: 'none/input.scss',
    data: '@use "sass:math";\na {b: math.unit(1)}\n',
  },
  {
    name: 'none/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'one_numerator/input.scss',
    data: '@use "sass:math";\na {b: math.unit(1px)}\n',
  },
  {
    name: 'one_numerator/output.css',
    data: 'a {\n  b: "px";\n}\n',
  },
  {
    name: 'multiple_numerators/input.scss',
    data: '@use "sass:math";\na {b: math.unit(1px * 1em * 1rad)}\n',
  },
  {
    name: 'multiple_numerators/output.css',
    data: 'a {\n  b: "px*em*rad";\n}\n',
  },
  {
    name: 'one_denominator/input.scss',
    data: '@use "sass:math";\na {b: math.unit(1/1px)}\n',
  },
  {
    name: 'one_denominator/output.css',
    data: 'a {\n  b: "px^-1";\n}\n',
  },
  {
    name: 'one_denominator/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 1px)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.unit(1/1px)}\n  |                 ^^^^^\n  '\n    input.scss 2:17  root stylesheet\n",
  },
  {
    name: 'multiple_denominators/input.scss',
    data: '@use "sass:math";\na {b: math.unit(1 / 1px / 3em / 4rad)}\n',
  },
  {
    name: 'multiple_denominators/output.css',
    data: 'a {\n  b: "(px*em*rad)^-1";\n}\n',
  },
  {
    name: 'multiple_denominators/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(math.div(math.div(1, 1px), 3em), 4rad)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.unit(1 / 1px / 3em / 4rad)}\n  |                 ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:17  root stylesheet\n",
  },
  {
    name: 'numerator_and_denominator/single/input.scss',
    data: '@use "sass:math";\na {b: math.unit(1px / 1em)}\n',
  },
  {
    name: 'numerator_and_denominator/single/output.css',
    data: 'a {\n  b: "px/em";\n}\n',
  },
  {
    name: 'numerator_and_denominator/single/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1px, 1em)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.unit(1px / 1em)}\n  |                 ^^^^^^^^^\n  '\n    input.scss 2:17  root stylesheet\n",
  },
  {
    name: 'numerator_and_denominator/multiple/input.scss',
    data: '@use "sass:math";\na {b: math.unit(1px * 1em / 1rad / 1s)}\n',
  },
  {
    name: 'numerator_and_denominator/multiple/output.css',
    data: 'a {\n  b: "px*em/(rad*s)";\n}\n',
  },
  {
    name: 'numerator_and_denominator/multiple/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1px * 1em, 1rad) or calc(1px * 1em / 1rad)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.unit(1px * 1em / 1rad / 1s)}\n  |                 ^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:17  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(math.div(1px * 1em, 1rad), 1s) or calc(1px * 1em / 1rad / 1s)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.unit(1px * 1em / 1rad / 1s)}\n  |                 ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:17  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\na {b: math.unit($number: 1)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.unit(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $number: c is not a number.\n  ,\n2 | a {b: math.unit(c)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.unit()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.unit()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function unit($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.unit(1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.unit(1, 2)}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function unit($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
