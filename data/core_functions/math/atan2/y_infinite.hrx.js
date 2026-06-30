export default [
  {
    name: 'negative/with_x/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(-1, 0), math.div(-1, 0))}\n',
  },
  {
    name: 'negative/with_x/negative_infinity/output.css',
    data: 'a {\n  b: -135deg;\n}\n',
  },
  {
    name: 'negative/with_x/negative_finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(-1, 0), -1)}\n',
  },
  {
    name: 'negative/with_x/negative_finite/output.css',
    data: 'a {\n  b: -90deg;\n}\n',
  },
  {
    name: 'negative/with_x/negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(-1, 0), -0.0)}\n',
  },
  {
    name: 'negative/with_x/negative_zero/output.css',
    data: 'a {\n  b: -90deg;\n}\n',
  },
  {
    name: 'negative/with_x/zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(-1, 0), 0)}\n',
  },
  {
    name: 'negative/with_x/zero/output.css',
    data: 'a {\n  b: -90deg;\n}\n',
  },
  {
    name: 'negative/with_x/finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(-1, 0), 1)}\n',
  },
  {
    name: 'negative/with_x/finite/output.css',
    data: 'a {\n  b: -90deg;\n}\n',
  },
  {
    name: 'negative/with_x/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(-1, 0), math.div(1, 0))}\n',
  },
  {
    name: 'negative/with_x/infinity/output.css',
    data: 'a {\n  b: -45deg;\n}\n',
  },
  {
    name: 'positive/with_x/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(1, 0), math.div(-1, 0))}\n',
  },
  {
    name: 'positive/with_x/negative_infinity/output.css',
    data: 'a {\n  b: 135deg;\n}\n',
  },
  {
    name: 'positive/with_x/negative_finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(1, 0), -1)}\n',
  },
  {
    name: 'positive/with_x/negative_finite/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'positive/with_x/negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(1, 0), -0.0)}\n',
  },
  {
    name: 'positive/with_x/negative_zero/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'positive/with_x/negative_zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(1, 0), -0.000000000001)}\n',
  },
  {
    name: 'positive/with_x/negative_zero_fuzzy/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'positive/with_x/zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(1, 0), 0)}\n',
  },
  {
    name: 'positive/with_x/zero/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'positive/with_x/zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(1, 0), 0.000000000001)}\n',
  },
  {
    name: 'positive/with_x/zero_fuzzy/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'positive/with_x/finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(1, 0), 1)}\n',
  },
  {
    name: 'positive/with_x/finite/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'positive/with_x/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(math.div(1, 0), math.div(1, 0))}\n',
  },
  {
    name: 'positive/with_x/infinity/output.css',
    data: 'a {\n  b: 45deg;\n}\n',
  },
]
