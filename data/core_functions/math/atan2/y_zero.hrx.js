export default [
  {
    name: 'negative/with_x/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.0, math.div(-1, 0))}\n',
  },
  {
    name: 'negative/with_x/negative_infinity/output.css',
    data: 'a {\n  b: -180deg;\n}\n',
  },
  {
    name: 'negative/with_x/negative_finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.0, -1)}\n',
  },
  {
    name: 'negative/with_x/negative_finite/output.css',
    data: 'a {\n  b: -180deg;\n}\n',
  },
  {
    name: 'negative/with_x/negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.0, -0.0)}\n',
  },
  {
    name: 'negative/with_x/negative_zero/output.css',
    data: 'a {\n  b: -180deg;\n}\n',
  },
  {
    name: 'negative/with_x/negative_zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.0, -0.000000000001)}\n',
  },
  {
    name: 'negative/with_x/negative_zero_fuzzy/output.css',
    data: 'a {\n  b: -180deg;\n}\n',
  },
  {
    name: 'negative/with_x/zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.0, 0)}\n',
  },
  {
    name: 'negative/with_x/zero/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'negative/with_x/zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.0, 0.000000000001)}\n',
  },
  {
    name: 'negative/with_x/zero_fuzzy/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'negative/with_x/finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.0, 1)}\n',
  },
  {
    name: 'negative/with_x/finite/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'negative/with_x/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.0, math.div(1, 0))}\n',
  },
  {
    name: 'negative/with_x/infinity/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'negative_fuzzy/with_x/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.000000000001, math.div(-1, 0))}\n',
  },
  {
    name: 'negative_fuzzy/with_x/negative_infinity/output.css',
    data: 'a {\n  b: -180deg;\n}\n',
  },
  {
    name: 'negative_fuzzy/with_x/negative_finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.000000000001, -1)}\n',
  },
  {
    name: 'negative_fuzzy/with_x/negative_finite/output.css',
    data: 'a {\n  b: -179.9999999999deg;\n}\n',
  },
  {
    name: 'negative_fuzzy/with_x/negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.000000000001, -0.0)}\n',
  },
  {
    name: 'negative_fuzzy/with_x/negative_zero/output.css',
    data: 'a {\n  b: -90deg;\n}\n',
  },
  {
    name: 'negative_fuzzy/with_x/zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.000000000001, 0)}\n',
  },
  {
    name: 'negative_fuzzy/with_x/zero/output.css',
    data: 'a {\n  b: -90deg;\n}\n',
  },
  {
    name: 'negative_fuzzy/with_x/finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.000000000001, 1)}\n',
  },
  {
    name: 'negative_fuzzy/with_x/finite/output.css',
    data: 'a {\n  b: -0.0000000001deg;\n}\n',
  },
  {
    name: 'negative_fuzzy/with_x/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(-0.000000000001, math.div(1, 0))}\n',
  },
  {
    name: 'negative_fuzzy/with_x/infinity/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'positive/with_x/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, math.div(-1, 0))}\n',
  },
  {
    name: 'positive/with_x/negative_infinity/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'positive/with_x/negative_finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, -1)}\n',
  },
  {
    name: 'positive/with_x/negative_finite/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'positive/with_x/negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, -0.0)}\n',
  },
  {
    name: 'positive/with_x/negative_zero/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'positive/with_x/negative_zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, -0.000000000001)}\n',
  },
  {
    name: 'positive/with_x/negative_zero_fuzzy/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'positive/with_x/zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, 0)}\n',
  },
  {
    name: 'positive/with_x/zero/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'positive/with_x/zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, 0.000000000001)}\n',
  },
  {
    name: 'positive/with_x/zero_fuzzy/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'positive/with_x/finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, 1)}\n',
  },
  {
    name: 'positive/with_x/finite/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'positive/with_x/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, math.div(1, 0))}\n',
  },
  {
    name: 'positive/with_x/infinity/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'positive_fuzzy/with_x/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0.000000000001, math.div(-1, 0))}\n',
  },
  {
    name: 'positive_fuzzy/with_x/negative_infinity/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'positive_fuzzy/with_x/negative_finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0.000000000001, -1)}\n',
  },
  {
    name: 'positive_fuzzy/with_x/negative_finite/output.css',
    data: 'a {\n  b: 179.9999999999deg;\n}\n',
  },
  {
    name: 'positive_fuzzy/with_x/negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0.000000000001, -0.0)}\n',
  },
  {
    name: 'positive_fuzzy/with_x/negative_zero/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'positive_fuzzy/with_x/zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0.000000000001, 0)}\n',
  },
  {
    name: 'positive_fuzzy/with_x/zero/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'positive_fuzzy/with_x/finite/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0.000000000001, 1)}\n',
  },
  {
    name: 'positive_fuzzy/with_x/finite/output.css',
    data: 'a {\n  b: 0.0000000001deg;\n}\n',
  },
  {
    name: 'positive_fuzzy/with_x/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0.000000000001, math.div(1, 0))}\n',
  },
  {
    name: 'positive_fuzzy/with_x/infinity/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
]
