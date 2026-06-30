// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/sign.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `sign()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'positive/input.scss',
    data: 'a {b: sign(3)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: sign(-5.6)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -1;\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, sign(0))}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'nan/input.scss',
    data: 'a {b: sign(NaN)}\n',
  },
  {
    name: 'nan/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, sign(-0.0))}\n',
  },
  {
    name: 'negative_zero/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'zero_fuzzy/input.scss',
    data: 'a {b: sign(0.000000000001)}\n',
  },
  {
    name: 'zero_fuzzy/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'preserves_units/input.scss',
    data: 'a {b: sign(-7px / 4em) * 1em}\n',
  },
  {
    name: 'preserves_units/output.css',
    data: 'a {\n  b: -1px;\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: sign(1px + 2px - var(--c))\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: sign(3px - var(--c));\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: sIgN(3)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function sign($arg) {@return $arg}\na {b: sign(2)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: 'a {b: sign("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: sign("0")}\n  |            ^^^\n  \'\n  input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: sign()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: sign()}\n  |       ^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: sign(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: sign(0, 0)}\n  |       ^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: sign($)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: sign($)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: sign(7 % 3)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: sign(7 % 3)}\n  |              ^\n  '\n  input.scss 1:14  root stylesheet\n",
  },
]
