// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/round/strategy/up.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `round()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'strategy/up/positive/input.scss',
    data: 'a {b: round(up, 101px, 25px)}\n',
  },
  {
    name: 'strategy/up/positive/output.css',
    data: 'a {\n  b: 125px;\n}\n',
  },
  {
    name: 'strategy/up/step_is_multiple_of_number/input.scss',
    data: 'a {b: round(up, 5px, 25px)}\n',
  },
  {
    name: 'strategy/up/step_is_multiple_of_number/output.css',
    data: 'a {\n  b: 25px;\n}\n',
  },
  {
    name: 'strategy/up/number_is_multiple_of_step/input.scss',
    data: 'a {b: round(up, 25px, 5px)}\n',
  },
  {
    name: 'strategy/up/number_is_multiple_of_step/output.css',
    data: 'a {\n  b: 25px;\n}\n',
  },
  {
    name: 'strategy/up/negative/input.scss',
    data: 'a {b: round(up, -101, -25)}\n',
  },
  {
    name: 'strategy/up/negative/output.css',
    data: 'a {\n  b: -100;\n}\n',
  },
  {
    name: 'strategy/up/negative_step/input.scss',
    data: 'a {b: round(up, 12px, -7px)}\n',
  },
  {
    name: 'strategy/up/negative_step/output.css',
    data: 'a {\n  b: 14px;\n}\n',
  },
  {
    name: 'strategy/up/step_is_zero/input.scss',
    data: 'a {b: round(up, 10px, 0px)}\n',
  },
  {
    name: 'strategy/up/step_is_zero/output.css',
    data: 'a {\n  b: calc(NaN * 1px);\n}\n',
  },
  {
    name: 'strategy/up/positive_and_infinity/input.scss',
    data: 'a {b: round(up, 10, infinity)}\n',
  },
  {
    name: 'strategy/up/positive_and_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'strategy/up/negative_and_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(up, -10, infinity))}\n',
  },
  {
    name: 'strategy/up/negative_and_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'strategy/up/infinity/input.scss',
    data: '@use "sass:math";\na {b: round(up, infinity, infinity)}\n',
  },
  {
    name: 'strategy/up/infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'strategy/up/upper_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(up, 23px, 10px)}\n',
  },
  {
    name: 'strategy/up/upper_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 30px;\n}\n',
  },
  {
    name: 'strategy/up/upper_multiple/number_is_smaller/input.scss',
    data: 'a {b: round(up, 18px, 10px)}\n',
  },
  {
    name: 'strategy/up/upper_multiple/number_is_smaller/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'strategy/up/upper_multiple/number_is_half/input.scss',
    data: 'a {b: round(up, 15px, 10px)}\n',
  },
  {
    name: 'strategy/up/upper_multiple/number_is_half/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'strategy/up/upper_multiple/number_is_negative/input.scss',
    data: 'a {b: round(up, -13px, 10px)}\n',
  },
  {
    name: 'strategy/up/upper_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -10px;\n}\n',
  },
  {
    name: 'strategy/up/lower_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(up, 13px, 10px)}\n',
  },
  {
    name: 'strategy/up/lower_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'strategy/up/lower_multiple/number_is_negative/input.scss',
    data: 'a {b: round(up, -18px, 10px)}\n',
  },
  {
    name: 'strategy/up/lower_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -10px;\n}\n',
  },
  {
    name: 'strategy/up/negative_zero/positive_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(up, -1 * 0, infinity))}\n',
  },
  {
    name: 'strategy/up/negative_zero/positive_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'strategy/up/positive_zero/zero/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(up, 0, infinity))}\n',
  },
  {
    name: 'strategy/up/positive_zero/zero/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'strategy/up/positive_zero/one/input.scss',
    data: 'a {b: round(up, 1, infinity)}\n',
  },
  {
    name: 'strategy/up/positive_zero/one/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
]
