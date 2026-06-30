// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/degenerate.hrx

export default [
  {
    name: 'infinity/unitless/input.scss',
    data: "@use 'sass:math';\na {b: math.div(1, 0)}\n",
  },
  {
    name: 'infinity/unitless/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'infinity/single_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(1px, 0)}\n",
  },
  {
    name: 'infinity/single_unit/output.css',
    data: 'a {\n  b: calc(infinity * 1px);\n}\n',
  },
  {
    name: 'infinity/multiple_numerator_units/input.scss',
    data: "@use 'sass:math';\na {b: math.div(1px * 1em, 0)}\n",
  },
  {
    name: 'infinity/multiple_numerator_units/output.css',
    data: 'a {\n  b: calc(infinity * 1px * 1em);\n}\n',
  },
  {
    name: 'infinity/denominator_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(1, 0px)}\n",
  },
  {
    name: 'infinity/denominator_unit/output.css',
    data: 'a {\n  b: calc(infinity / 1px);\n}\n',
  },
  {
    name: 'infinity/numerator_and_denominator_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(1px, 0em)}\n",
  },
  {
    name: 'infinity/numerator_and_denominator_unit/output.css',
    data: 'a {\n  b: calc(infinity * 1px / 1em);\n}\n',
  },
  {
    name: 'minus_infinity/unitless/input.scss',
    data: "@use 'sass:math';\na {b: math.div(-1, 0)}\n",
  },
  {
    name: 'minus_infinity/unitless/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'minus_infinity/single_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(-1px, 0)}\n",
  },
  {
    name: 'minus_infinity/single_unit/output.css',
    data: 'a {\n  b: calc(-infinity * 1px);\n}\n',
  },
  {
    name: 'minus_infinity/multiple_numerator_units/input.scss',
    data: "@use 'sass:math';\na {b: math.div(-1px * 1em, 0)}\n",
  },
  {
    name: 'minus_infinity/multiple_numerator_units/output.css',
    data: 'a {\n  b: calc(-infinity * 1px * 1em);\n}\n',
  },
  {
    name: 'minus_infinity/denominator_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(-1, 0px)}\n",
  },
  {
    name: 'minus_infinity/denominator_unit/output.css',
    data: 'a {\n  b: calc(-infinity / 1px);\n}\n',
  },
  {
    name: 'minus_infinity/numerator_and_denominator_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(-1px, 0em)}\n",
  },
  {
    name: 'minus_infinity/numerator_and_denominator_unit/output.css',
    data: 'a {\n  b: calc(-infinity * 1px / 1em);\n}\n',
  },
  {
    name: 'nan/unitless/input.scss',
    data: "@use 'sass:math';\na {b: math.div(0, 0)}\n",
  },
  {
    name: 'nan/unitless/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'nan/single_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(0px, 0)}\n",
  },
  {
    name: 'nan/single_unit/output.css',
    data: 'a {\n  b: calc(NaN * 1px);\n}\n',
  },
  {
    name: 'nan/multiple_numerator_units/input.scss',
    data: "@use 'sass:math';\na {b: math.div(0px * 0em, 0)}\n",
  },
  {
    name: 'nan/multiple_numerator_units/output.css',
    data: 'a {\n  b: calc(NaN * 1px * 1em);\n}\n',
  },
  {
    name: 'nan/denominator_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(0, 0px)}\n",
  },
  {
    name: 'nan/denominator_unit/output.css',
    data: 'a {\n  b: calc(NaN / 1px);\n}\n',
  },
  {
    name: 'nan/numerator_and_denominator_unit/input.scss',
    data: "@use 'sass:math';\na {b: math.div(0px, 0em)}\n",
  },
  {
    name: 'nan/numerator_and_denominator_unit/output.css',
    data: 'a {\n  b: calc(NaN * 1px / 1em);\n}\n',
  },
]
