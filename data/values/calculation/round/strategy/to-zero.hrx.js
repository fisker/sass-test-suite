// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/round/strategy/to-zero.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `round()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'strategy/to-zero/positive/input.scss',
    data: 'a {b: round(to-zero, 120px, 25px)}\n',
  },
  {
    name: 'strategy/to-zero/positive/output.css',
    data: 'a {\n  b: 100px;\n}\n',
  },
  {
    name: 'strategy/to-zero/negative/input.scss',
    data: 'a {b: round(to-zero, -120px, -25px)}\n',
  },
  {
    name: 'strategy/to-zero/negative/output.css',
    data: 'a {\n  b: -125px;\n}\n',
  },
  {
    name: 'strategy/to-zero/upper_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(to-zero, 23px, 10px)}\n',
  },
  {
    name: 'strategy/to-zero/upper_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 20px;\n}\n',
  },
  {
    name: 'strategy/to-zero/upper_multiple/number_is_smaller/input.scss',
    data: 'a {b: round(to-zero, 18px, 10px)}\n',
  },
  {
    name: 'strategy/to-zero/upper_multiple/number_is_smaller/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'strategy/to-zero/upper_multiple/number_is_half/input.scss',
    data: 'a {b: round(to-zero, 15px, 10px)}\n',
  },
  {
    name: 'strategy/to-zero/upper_multiple/number_is_half/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'strategy/to-zero/upper_multiple/number_is_negative/input.scss',
    data: 'a {b: round(to-zero, -13px, 10px)}\n',
  },
  {
    name: 'strategy/to-zero/upper_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -10px;\n}\n',
  },
  {
    name: 'strategy/to-zero/lower_multiple/number_is_bigger/input.scss',
    data: 'a {b: round(to-zero, 13px, 10px)}\n',
  },
  {
    name: 'strategy/to-zero/lower_multiple/number_is_bigger/output.css',
    data: 'a {\n  b: 10px;\n}\n',
  },
  {
    name: 'strategy/to-zero/lower_multiple/number_is_negative/input.scss',
    data: 'a {b: round(to-zero, -18px, 10px)}\n',
  },
  {
    name: 'strategy/to-zero/lower_multiple/number_is_negative/output.css',
    data: 'a {\n  b: -10px;\n}\n',
  },
  {
    name: 'strategy/to-zero/negative_zero/positive_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(to-zero, -5, infinity))}\n',
  },
  {
    name: 'strategy/to-zero/negative_zero/positive_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'strategy/to-zero/negative_zero/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(to-zero, -5, -infinity))}\n',
  },
  {
    name: 'strategy/to-zero/negative_zero/negative_infinity/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'strategy/to-zero/positive_zero/positive_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(to-zero, 5, infinity))}\n',
  },
  {
    name: 'strategy/to-zero/positive_zero/positive_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'strategy/to-zero/positive_zero/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.div(1, round(to-zero, 5, -infinity))}\n',
  },
  {
    name: 'strategy/to-zero/positive_zero/negative_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
]
