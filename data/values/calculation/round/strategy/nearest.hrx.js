// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/round/strategy/nearest.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `round()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: round(nearest, 3.8px - 1px + var(--test), 1.1px + 4px)}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: round(nearest, 2.8px + var(--test), 5.1px);\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: 'a {b: round(nearest, 117px, 25px)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 125px;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: round(nearest, -101, -25)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -100;\n}\n',
  },
  {
    name: 'step_is_zero/input.scss',
    data: 'a {b: round(nearest, 10px, 0px)}\n',
  },
  {
    name: 'step_is_zero/output.css',
    data: 'a {\n  b: calc(NaN * 1px);\n}\n',
  },
  {
    name: 'positive_and_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(nearest, 10, infinity))}\n',
  },
  {
    name: 'positive_and_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'negative_and_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(nearest, -10, infinity))}\n',
  },
  {
    name: 'negative_and_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'infinity_and_negative/input.scss',
    data: 'a {b: round(nearest, infinity, -5)}\n',
  },
  {
    name: 'infinity_and_negative/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'infinity_and_positive/input.scss',
    data: 'a {b: round(nearest, infinity, 5)}\n',
  },
  {
    name: 'infinity_and_positive/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'negative_infinity_and_negative/input.scss',
    data: 'a {b: round(nearest, -infinity, -5)}\n',
  },
  {
    name: 'negative_infinity_and_negative/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'negative_infinity_and_positive/input.scss',
    data: 'a {b: round(nearest, -infinity, 5)}\n',
  },
  {
    name: 'negative_infinity_and_positive/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'infinity/negative/input.scss',
    data: 'a {b: round(nearest, -infinity, -infinity)}\n',
  },
  {
    name: 'infinity/negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'infinity/negative_and_positive/input.scss',
    data: 'a {b: round(nearest, -infinity, infinity)}\n',
  },
  {
    name: 'infinity/negative_and_positive/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'infinity/positive_and_negative/input.scss',
    data: 'a {b: round(nearest, infinity, -infinity)}\n',
  },
  {
    name: 'infinity/positive_and_negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'infinity/positive_and_positive/input.scss',
    data: '@use "sass:math";\na {b: round(nearest, infinity, infinity)}\n',
  },
  {
    name: 'infinity/positive_and_positive/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'step_is_multiple_of_number/input.scss',
    data: 'a {b: round(nearest, 5px, 25px)}\n',
  },
  {
    name: 'step_is_multiple_of_number/output.css',
    data: 'a {\n  b: 0px;\n}\n',
  },
  {
    name: 'number_is_multiple_of_step/input.scss',
    data: 'a {b: round(nearest, 25px, 5px)}\n',
  },
  {
    name: 'number_is_multiple_of_step/output.css',
    data: 'a {\n  b: 25px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(nearest, 23px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_smaller/input.scss',
    data: 'a {b: round(nearest, 18px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_smaller/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_half/input.scss',
    data: 'a {b: round(nearest, 15px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_half/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'upper_multiple/number_is_negative/input.scss',
    data: 'a {b: round(nearest, -13px, 10px)}\n',
  },
  {
    name: 'upper_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -10px;\n}\n',
  },
  {
    name: 'lower_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(nearest, 13px, 10px)}\n',
  },
  {
    name: 'lower_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'lower_multiple/number_is_negative/input.scss',
    data: 'a {b: round(nearest, -18px, 10px)}\n',
  },
  {
    name: 'lower_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -20px;\n}\n',
  },
]
