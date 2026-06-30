// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/min.hrx

export default [
  {
    name: 'README.md',
    data: 'We have to call these using a module namespace to avoid parsing them as\nplain-CSS min().\n',
  },
  {
    name: 'one_arg/input.scss',
    data: '@use "sass:math";\na {b: math.min(1)}\n',
  },
  {
    name: 'one_arg/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'two_args/input.scss',
    data: '@use "sass:math";\na {b: math.min(1, 2)}\n',
  },
  {
    name: 'two_args/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'three_args/input.scss',
    data: '@use "sass:math";\na {b: math.min(3, 1, 2)}\n',
  },
  {
    name: 'three_args/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'units/same/input.scss',
    data: '@use "sass:math";\na {b: math.min(6px, 2px, 10px)}\n',
  },
  {
    name: 'units/same/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'units/compatible/input.scss',
    data: '@use "sass:math";\na {b: math.min(1px, 1in, 1cm)}\n',
  },
  {
    name: 'units/compatible/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'units/and_unitless/input.scss',
    data: '@use "sass:math";\na {b: math.min(2px, 1)}\n',
  },
  {
    name: 'units/and_unitless/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'global/README.md',
    data: "`min()` expressions without a namespace are parsed as calculations unless they\ncontain a Sass feature that's not valid in a calculation. We verify here that\nthese Sass features still work despite being invalid if it were parsed as a\ncalculation.\n",
  },
  {
    name: 'global/surrounding_whitespace/input.scss',
    data: "// The extra whitespace doesn't cause this to be parsed as a Sass function, but\n// we want to verify that it also doesn't interfere.\nb {c: min( 1px, 2px, )}\n",
  },
  {
    name: 'global/surrounding_whitespace/output.css',
    data: 'b {\n  c: 1px;\n}\n',
  },
  {
    name: 'global/modulo/input.scss',
    data: 'a {b: min(1px, 7px % 4)}\n',
  },
  {
    name: 'global/modulo/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'global/modulo/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.min instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: min(1px, 7px % 4)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'global/trailing_comma/input.scss',
    data: 'a {b: min(1px, 2px,)}\n',
  },
  {
    name: 'global/trailing_comma/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'error/type/arg_1/input.scss',
    data: '@use "sass:math";\na {b: math.min(c)}\n',
  },
  {
    name: 'error/type/arg_1/error',
    data: "Error: c is not a number.\n  ,\n2 | a {b: math.min(c)}\n  |       ^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/arg_2/input.scss',
    data: '@use "sass:math";\na {b: math.min(1, c)}\n',
  },
  {
    name: 'error/type/arg_2/error',
    data: "Error: c is not a number.\n  ,\n2 | a {b: math.min(1, c)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/arg_3/input.scss',
    data: '@use "sass:math";\na {b: math.min(1, 2, c)}\n',
  },
  {
    name: 'error/type/arg_3/error',
    data: "Error: c is not a number.\n  ,\n2 | a {b: math.min(1, 2, c)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.min()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: At least one argument must be passed.\n  ,\n2 | a {b: math.min()}\n  |       ^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/incompatible_units/input.scss',
    data: '@use "sass:math";\na {b: math.min(1px, 2s)}\n',
  },
  {
    name: 'error/incompatible_units/error',
    data: "Error: 1px and 2s have incompatible units.\n  ,\n2 | a {b: math.min(1px, 2s)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
