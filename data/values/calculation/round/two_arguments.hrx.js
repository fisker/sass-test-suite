// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/round/two_arguments.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `round()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'units/none/input.scss',
    data: 'a {b: round(117, 25)}\n',
  },
  {
    name: 'units/none/output.css',
    data: 'a {\n  b: 125;\n}\n',
  },
  {
    name: 'units/compatible/input.scss',
    data: 'a {b: round(117cm, 25mm)}\n',
  },
  {
    name: 'units/compatible/output.css',
    data: 'a {\n  b: 117.5cm;\n}\n',
  },
  {
    name: 'units/real_and_unknown/input.scss',
    data: 'a {b: round(1px, 10%)}\n',
  },
  {
    name: 'units/real_and_unknown/output.css',
    data: 'a {\n  b: round(1px, 10%);\n}\n',
  },
  {
    name: 'units/unknown/input.scss',
    data: 'a {\n  b: round(1%, 2%);\n}\n',
  },
  {
    name: 'units/unknown/output.css',
    data: 'a {\n  b: 2%;\n}\n',
  },
  {
    name: 'units/fake/input.scss',
    data: 'a {\n  b: round(1foo, 2bar);\n}\n',
  },
  {
    name: 'units/fake/output.css',
    data: 'a {\n  b: round(1foo, 2bar);\n}\n',
  },
  {
    name: 'units/same_fake/input.scss',
    data: 'a {\n  b: round(1foo, 2foo);\n}\n',
  },
  {
    name: 'units/same_fake/output.css',
    data: 'a {\n  b: 2foo;\n}\n',
  },
  {
    name: 'units/real_and_fake/input.scss',
    data: 'a {\n  b: round(1px, 2bar);\n}\n',
  },
  {
    name: 'units/real_and_fake/output.css',
    data: 'a {\n  b: round(1px, 2bar);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {b: round(3.4px + 10%, 1px + 4px)}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: round(3.4px + 10%, 5px);\n}\n',
  },
  {
    name: 'step_is_zero/input.scss',
    data: 'a {b: round(5px, 0px)}\n',
  },
  {
    name: 'step_is_zero/output.css',
    data: 'a {\n  b: calc(NaN * 1px);\n}\n',
  },
  {
    name: 'equals/input.scss',
    data: 'a {b: round(10px, 10px)}\n',
  },
  {
    name: 'equals/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'nan/input.scss',
    data: 'a {b: round(NaN, NaN)}\n',
  },
  {
    name: 'nan/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'unknown_variable/input.scss',
    data: 'a {\n  c: round(up, var(--c));\n}\n',
  },
  {
    name: 'unknown_variable/output.css',
    data: 'a {\n  c: round(up, var(--c));\n}\n',
  },
  {
    name: 'preserved/interpolation/input.scss',
    data: 'a {\n  e: round(#{"5.5px, 1px"});\n}\n',
  },
  {
    name: 'preserved/interpolation/output.css',
    data: 'a {\n  e: round(5.5px, 1px);\n}\n',
  },
  {
    name: 'upper_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(23px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_smaller/input.scss',
    data: 'a {b: round(18px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_smaller/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_half/input.scss',
    data: 'a {b: round(15px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_half/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_negative/input.scss',
    data: 'a {b: round(-13px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -10px;\n}\n',
  },
  {
    name: 'lower_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(13px, 10px)}\n',
  },
  {
    name: 'lower_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'lower_multiple/number_is_negative/input.scss',
    data: 'a {b: round(-18px, 10px)}\n',
  },
  {
    name: 'lower_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -20px;\n}\n',
  },
  {
    name: 'negative_zero/positive_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(-5, infinity))}\n',
  },
  {
    name: 'negative_zero/positive_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'negative_zero/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(-5, -infinity))}\n',
  },
  {
    name: 'negative_zero/negative_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'positive_zero/positive_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(5, infinity))}\n',
  },
  {
    name: 'positive_zero/positive_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'positive_zero/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(5, -infinity))}\n',
  },
  {
    name: 'positive_zero/negative_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'negative_step/upper_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(23px, -10px)}\n',
  },
  {
    name: 'negative_step/upper_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'negative_step/upper_multiple/number_is_smaller/input.scss',
    data: 'a {b: round(18px, -10px)}\n',
  },
  {
    name: 'negative_step/upper_multiple/number_is_smaller/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'negative_step/upper_multiple/number_is_half/input.scss',
    data: 'a {b: round(15px, -10px)}\n',
  },
  {
    name: 'negative_step/upper_multiple/number_is_half/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'negative_step/upper_multiple/number_is_negative/input.scss',
    data: 'a {b: round(-13px, -10px)}\n',
  },
  {
    name: 'negative_step/upper_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -10px;\n}\n',
  },
  {
    name: 'negative_step/lower_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(13px, -10px)}\n',
  },
  {
    name: 'negative_step/lower_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'negative_step/lower_multiple/number_is_negative/input.scss',
    data: 'a {b: round(-18px, -10px)}\n',
  },
  {
    name: 'negative_step/lower_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -20px;\n}\n',
  },
  {
    name: 'math/unknown_units/input.scss',
    data: 'a {\n  b: round(1px + 0%, 1px + 0%);\n}\n',
  },
  {
    name: 'math/unknown_units/output.css',
    data: 'a {\n  b: round(1px + 0%, 1px + 0%);\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: RoUnD(117, 25)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 125;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function round($arg1, $arg2) {@return $arg1}\na {b: round(1, 2)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
]
