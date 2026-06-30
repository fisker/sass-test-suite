// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/max.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `max()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'error/syntax/no_args/input.scss',
    data: 'a {b: max()}\n',
  },
  {
    name: 'error/syntax/no_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: max()}\n  |       ^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: max($)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: max($)}\n  |            ^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'error/known_incompatible/first/input.scss',
    data: 'a {b: max(1s, 2px)}\n',
  },
  {
    name: 'error/known_incompatible/first/error',
    data: "Error: 1s and 2px are incompatible.\n  ,\n1 | a {b: max(1s, 2px)}\n  |           ^^ 1s\n  |               === 2px\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/known_incompatible/second/input.scss',
    data: 'a {b: max(1px, 2s)}\n',
  },
  {
    name: 'error/known_incompatible/second/error',
    data: "Error: 1px and 2s are incompatible.\n  ,\n1 | a {b: max(1px, 2s)}\n  |           ^^^ 1px\n  |                == 2s\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/known_incompatible/third/input.scss',
    data: 'a {b: max(1px, 2px, 3s)}\n',
  },
  {
    name: 'error/known_incompatible/third/error',
    data: "Error: 1px and 3s are incompatible.\n  ,\n1 | a {b: max(1px, 2px, 3s)}\n  |           ^^^ 1px\n  |                     == 3s\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/potentially_incompatible_before_unitless/input.scss',
    data: 'a {b: max(1c, 2d, 3)}\n',
  },
  {
    name: 'error/potentially_incompatible_before_unitless/error',
    data: "Error: 1c and 3 are incompatible.\n  ,\n1 | a {b: max(1c, 2d, 3)}\n  |           ^^ 1c\n  |                   = 3\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/unitless_and_real/in_calc/input.scss',
    data: 'a {b: max(calc(1px + 2))}\n',
  },
  {
    name: 'error/unitless_and_real/in_calc/error',
    data: "Error: 1px and 2 are incompatible.\n  ,\n1 | a {b: max(calc(1px + 2))}\n  |                ^^^^^^^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'error/complex_unit/input.scss',
    data: 'a {b: max(1px*1px, 2%*2%)}\n',
  },
  {
    name: 'error/complex_unit/error',
    data: "Error: Number calc(1px * 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: max(1px*1px, 2%*2%)}\n  |           ^^^^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'extra_whitespace/number/input.scss',
    data: 'a {b: max( 1px )}\n',
  },
  {
    name: 'extra_whitespace/number/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'extra_whitespace/min_in_max/input.scss',
    data: '// Regression test for sass/dart-sass#1444\na {b: max( min( 1px ) )}\n',
  },
  {
    name: 'extra_whitespace/min_in_max/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'simplified/only/input.scss',
    data: 'a {b: max(1px)}\n',
  },
  {
    name: 'simplified/only/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'simplified/first/input.scss',
    data: 'a {b: max(1px, 0px)}\n',
  },
  {
    name: 'simplified/first/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'simplified/second/input.scss',
    data: 'a {b: max(0.5px, 2px)}\n',
  },
  {
    name: 'simplified/second/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'simplified/third/input.scss',
    data: 'a {b: max(1px, 2.5px, 2.9px)}\n',
  },
  {
    name: 'simplified/third/output.css',
    data: 'a {\n  b: 2.9px;\n}\n',
  },
  {
    name: 'simplified/compatible_units/input.scss',
    data: 'a {b: max(1px, 1in, 1cm)}\n',
  },
  {
    name: 'simplified/compatible_units/output.css',
    data: 'a {\n  b: 1in;\n}\n',
  },
  {
    name: 'simplified/unitless_and_real/input.scss',
    data: 'a {b: max(1px, 2.5, 0.9px)}\n',
  },
  {
    name: 'simplified/unitless_and_real/output.css',
    data: 'a {\n  b: 2.5;\n}\n',
  },
  {
    name: 'simplified/unitless_between_potentially_incompatible/input.scss',
    data: 'a {b: max(1d, 2, 3e)}\n',
  },
  {
    name: 'simplified/unitless_between_potentially_incompatible/output.css',
    data: 'a {\n  b: 3e;\n}\n',
  },
  {
    name: 'simplified/operation/unitless_and_real/input.scss',
    data: 'a {b: max(1px, 2.5 + 0.9px)}\n',
  },
  {
    name: 'simplified/operation/unitless_and_real/output.css',
    data: 'a {\n  b: 3.4px;\n}\n',
  },
  {
    name: 'simplified/operation/unitless_and_real/warning',
    data: "DEPRECATION WARNING [global-builtin]: In future versions of Sass, max() will be interpreted as the CSS max() calculation. This doesn't allow unitless numbers to be mixed with numbers with units. If you want to use the Sass function, call math.max() instead.\n\nSee https://sass-lang.com/d/import\n\n  ,\n1 | a {b: max(1px, 2.5 + 0.9px)}\n  |                ^^^^^^^^^^^\n  '\n    input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'preserved/math/first/input.scss',
    data: 'a {b: max(1% + 1px, 2px)}\n',
  },
  {
    name: 'preserved/math/first/output.css',
    data: 'a {\n  b: max(1% + 1px, 2px);\n}\n',
  },
  {
    name: 'preserved/math/second/input.scss',
    data: 'a {b: max(1px, 1% + 2px)}\n',
  },
  {
    name: 'preserved/math/second/output.css',
    data: 'a {\n  b: max(1px, 1% + 2px);\n}\n',
  },
  {
    name: 'preserved/math/third/input.scss',
    data: 'a {b: max(1px, 2px, 1% + 3px)}\n',
  },
  {
    name: 'preserved/math/third/output.css',
    data: 'a {\n  b: max(1px, 2px, 1% + 3px);\n}\n',
  },
  {
    name: 'preserved/unit/first/input.scss',
    data: 'a {b: max(1%, 2px)}\n',
  },
  {
    name: 'preserved/unit/first/output.css',
    data: 'a {\n  b: max(1%, 2px);\n}\n',
  },
  {
    name: 'preserved/unit/second/input.scss',
    data: 'a {b: max(1px, 2%)}\n',
  },
  {
    name: 'preserved/unit/second/output.css',
    data: 'a {\n  b: max(1px, 2%);\n}\n',
  },
  {
    name: 'preserved/unit/third/input.scss',
    data: 'a {b: max(1px, 2px, 3%)}\n',
  },
  {
    name: 'preserved/unit/third/output.css',
    data: 'a {\n  b: max(1px, 2px, 3%);\n}\n',
  },
  {
    name: 'preserved/variable/input.scss',
    data: '$a: 1%;\nb {c: max($a, 1px)}\n',
  },
  {
    name: 'preserved/variable/output.css',
    data: 'b {\n  c: max(1%, 1px);\n}\n',
  },
  {
    name: 'preserved/operation/unitless_and_real/plus/input.scss',
    data: 'a {b: max(1%, 2.5 + 0.9px)}\n',
  },
  {
    name: 'preserved/operation/unitless_and_real/plus/output.css',
    data: 'a {\n  b: max(1%, 3.4px);\n}\n',
  },
  {
    name: 'preserved/operation/unitless_and_real/plus/warning',
    data: "DEPRECATION WARNING [global-builtin]: In future versions of Sass, max() will be interpreted as the CSS max() calculation. This doesn't allow unitless numbers to be mixed with numbers with units. If you want to use the Sass function, call math.max() instead.\n\nSee https://sass-lang.com/d/import\n\n  ,\n1 | a {b: max(1%, 2.5 + 0.9px)}\n  |               ^^^^^^^^^^^\n  '\n    input.scss 1:15  root stylesheet\n",
  },
  {
    name: 'preserved/operation/unitless_and_real/minus/input.scss',
    data: 'a {b: max(1%, 2.5 - 0.9px)}\n',
  },
  {
    name: 'preserved/operation/unitless_and_real/minus/output.css',
    data: 'a {\n  b: max(1%, 1.6px);\n}\n',
  },
  {
    name: 'preserved/operation/unitless_and_real/minus/warning',
    data: "DEPRECATION WARNING [global-builtin]: In future versions of Sass, max() will be interpreted as the CSS max() calculation. This doesn't allow unitless numbers to be mixed with numbers with units. If you want to use the Sass function, call math.max() instead.\n\nSee https://sass-lang.com/d/import\n\n  ,\n1 | a {b: max(1%, 2.5 - 0.9px)}\n  |               ^^^^^^^^^^^\n  '\n    input.scss 1:15  root stylesheet\n",
  },
  {
    name: 'preserved/operation/unitless_and_real/in_calc/input.scss',
    data: 'a {b: calc(max(1%, 2.5 + 0.9px))}\n',
  },
  {
    name: 'preserved/operation/unitless_and_real/in_calc/output.css',
    data: 'a {\n  b: max(1%, 3.4px);\n}\n',
  },
  {
    name: 'preserved/operation/unitless_and_real/in_calc/warning',
    data: "DEPRECATION WARNING [global-builtin]: In future versions of Sass, max() will be interpreted as the CSS max() calculation. This doesn't allow unitless numbers to be mixed with numbers with units. If you want to use the Sass function, call math.max() instead.\n\nSee https://sass-lang.com/d/import\n\n  ,\n1 | a {b: calc(max(1%, 2.5 + 0.9px))}\n  |                    ^^^^^^^^^^^\n  '\n    input.scss 1:20  root stylesheet\n",
  },
  {
    name: 'math/slash_as_division/input.scss',
    data: 'b { \n  a: 2px / max(1.5);\n}\n',
  },
  {
    name: 'math/slash_as_division/output.css',
    data: 'b {\n  a: 1.3333333333px;\n}\n',
  },
  {
    name: 'math/slash_as_division/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(2px, max(1.5)) or calc(2px / max(1.5))\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   a: 2px / max(1.5);\n  |      ^^^^^^^^^^^^^^\n  '\n    input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: mAx(1px)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function max($arg1, $arg2) {@return $arg1}\na {b: max(1, 2)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
]
