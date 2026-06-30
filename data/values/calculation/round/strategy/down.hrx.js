// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/round/strategy/down.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `round()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'step_is_multiple_of_number/input.scss',
    data: 'a {b: round(down, 5px, 25px)}\n',
  },
  {
    name: 'step_is_multiple_of_number/output.css',
    data: 'a {\n  b: 0px;\n}\n',
  },
  {
    name: 'number_is_multiple_of_step/input.scss',
    data: 'a {b: round(down, 25px, 5px)}\n',
  },
  {
    name: 'number_is_multiple_of_step/output.css',
    data: 'a {\n  b: 25px;\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: 'a {b: round(down, 122px, 25px)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 100px;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: round(down, -101, -25)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -125;\n}\n',
  },
  {
    name: 'negative_step/input.scss',
    data: 'a {b: round(down, 12, -7)}\n',
  },
  {
    name: 'negative_step/output.css',
    data: 'a {\n  b: 7;\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: 'a {b: round(down, infinity, infinity)}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'step_is_zero/input.scss',
    data: 'a {b: round(down, 10px, 0px)}\n',
  },
  {
    name: 'step_is_zero/output.css',
    data: 'a {\n  b: calc(NaN * 1px);\n}\n',
  },
  {
    name: 'positive_and_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(down, 10, infinity))}\n',
  },
  {
    name: 'positive_and_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'negative_and_infinity/input.scss',
    data: '@use "sass:math";\na {b: round(down, -10, infinity)}\n',
  },
  {
    name: 'negative_and_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'upper_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(down, 23px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_smaller/input.scss',
    data: 'a {b: round(down, 18px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_smaller/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_half/input.scss',
    data: 'a {b: round(down, 15px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_half/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_negative/input.scss',
    data: 'a {b: round(down, -13px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -20px;\n}\n',
  },
  {
    name: 'lower_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(down, 13px, 10px)}\n',
  },
  {
    name: 'lower_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'lower_multiple/number_is_negative/input.scss',
    data: 'a {b: round(down, -18px, 10px)}\n',
  },
  {
    name: 'lower_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -20px;\n}\n',
  },
  {
    name: 'negative_zero/positive_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(down, -1 * 0, infinity))}\n',
  },
  {
    name: 'negative_zero/positive_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'positive_zero/zero/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(down, 0, infinity))}\n',
  },
  {
    name: 'positive_zero/zero/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'positive_zero/one/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(down, 1, infinity))}\n',
  },
  {
    name: 'positive_zero/one/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
]
