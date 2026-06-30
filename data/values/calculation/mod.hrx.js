export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `mod()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'units/none/input.scss',
    data: 'a {b: mod(7, 3)}\n',
  },
  {
    name: 'units/none/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'units/compatible/input.scss',
    data: 'a {b: mod(5px, 3px)}\n',
  },
  {
    name: 'units/compatible/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'units/real_and_unknown/input.scss',
    data: 'a {b: mod(5px, 3%)}\n',
  },
  {
    name: 'units/real_and_unknown/output.css',
    data: 'a {\n  b: mod(5px, 3%);\n}\n',
  },
  {
    name: 'units/unknown/input.scss',
    data: 'a {\n  b: mod(1%, 2%);\n}\n',
  },
  {
    name: 'units/unknown/output.css',
    data: 'a {\n  b: 1%;\n}\n',
  },
  {
    name: 'units/fake/input.scss',
    data: 'a {\n  b: mod(1foo, 2bar);\n}\n',
  },
  {
    name: 'units/fake/output.css',
    data: 'a {\n  b: mod(1foo, 2bar);\n}\n',
  },
  {
    name: 'units/same_fake/input.scss',
    data: 'a {\n  b: mod(1foo, 2foo);\n}\n',
  },
  {
    name: 'units/same_fake/output.css',
    data: 'a {\n  b: 1foo;\n}\n',
  },
  {
    name: 'units/real_and_fake/input.scss',
    data: 'a {\n  b: mod(1px, 2bar);\n}\n',
  },
  {
    name: 'units/real_and_fake/output.css',
    data: 'a {\n  b: mod(1px, 2bar);\n}\n',
  },
  {
    name: 'equals/input.scss',
    data: 'a {b: mod(1, 1)}\n',
  },
  {
    name: 'equals/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'positive_and_negative/input.scss',
    data: 'a {b: mod(2, -5)}\n',
  },
  {
    name: 'positive_and_negative/output.css',
    data: 'a {\n  b: -3;\n}\n',
  },
  {
    name: 'negative_and_positive/input.scss',
    data: 'a {b: mod(-2, 5)}\n',
  },
  {
    name: 'negative_and_positive/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: mod(-2, -5)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -2;\n}\n',
  },
  {
    name: 'y_zero/input.scss',
    data: 'a {b: mod(6, 0)}\n',
  },
  {
    name: 'y_zero/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'x_zero/input.scss',
    data: 'a {b: mod(0, 6)}\n',
  },
  {
    name: 'x_zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'zeros/input.scss',
    data: 'a {b: mod(0, 0)}\n',
  },
  {
    name: 'zeros/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'y_infinity/positive/input.scss',
    data: 'a {b: mod(infinity, 10)}\n',
  },
  {
    name: 'y_infinity/positive/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'x_infinity/positive/input.scss',
    data: 'a {b: mod(-10, infinity)}\n',
  },
  {
    name: 'x_infinity/positive/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'x_infinity/negative/input.scss',
    data: 'a {b: mod(10, -infinity)}\n',
  },
  {
    name: 'x_infinity/negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: mod(3px - 1px + var(--c), -7px / 4em * 1em);\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: mod(2px + var(--c), -1.75px);\n}\n',
  },
  {
    name: 'positive_zero/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, mod(7, 7))}\n',
  },
  {
    name: 'positive_zero/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, mod(-7, 7))}\n',
  },
  {
    name: 'negative_zero/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: MoD(7, 3)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function mod($arg) {@return $arg}\na {b: mod(1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/units/real_and_unitless/input.scss',
    data: 'a {b: mod(16px, 5)}\n',
  },
  {
    name: 'error/units/real_and_unitless/error',
    data: "Error: 16px and 5 are incompatible.\n  ,\n1 | a {b: mod(16px, 5)}\n  |           ^^^^ 16px\n  |                 = 5\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/units/incompatible/input.scss',
    data: 'a {b: mod(16px, 5deg)}\n',
  },
  {
    name: 'error/units/incompatible/error',
    data: "Error: 16px and 5deg are incompatible.\n  ,\n1 | a {b: mod(16px, 5deg)}\n  |           ^^^^ 16px\n  |                 ==== 5deg\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/units/complex_and_unknown/input.scss',
    data: 'a {b: mod(1px*2px, 10%)}\n',
  },
  {
    name: 'error/units/complex_and_unknown/error',
    data: "Error: Number calc(2px * 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: mod(1px*2px, 10%)}\n  |           ^^^^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: mod(3)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: 2 arguments required, but only 1 was passed.\n  ,\n1 | a {b: mod(3)}\n  |       ^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: mod(10, $)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: mod(10, $)}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'error/modulus_type/input.scss',
    data: 'a {b: mod(0, "0")}\n',
  },
  {
    name: 'error/modulus_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: mod(0, "0")}\n  |              ^^^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'error/dividend_type/input.scss',
    data: 'a {b: mod("0", 0)}\n',
  },
  {
    name: 'error/dividend_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: mod("0", 0)}\n  |           ^^^\n  \'\n  input.scss 1:11  root stylesheet\n',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: mod(3, 2, 1)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,\n1 | a {b: mod(3, 2, 1)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: mod(7 % 3, 1)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: mod(7 % 3, 1)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'nan/negative_zero_and_positive_infinity/input.scss',
    data: 'a {b: mod(-0, infinity)}\n',
  },
  {
    name: 'nan/negative_zero_and_positive_infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'nan/zero_and_negative_infinity/input.scss',
    data: 'a {b: mod(0, -infinity)}\n',
  },
  {
    name: 'nan/zero_and_negative_infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'nan/negative_and_positive_infinity/input.scss',
    data: 'a {b: mod(-5, infinity)}\n',
  },
  {
    name: 'nan/negative_and_positive_infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'nan/positive_and_negative_infinity/input.scss',
    data: 'a {b: mod(5, -infinity)}\n',
  },
  {
    name: 'nan/positive_and_negative_infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
]
