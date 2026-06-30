// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/oklab.hrx

export default [
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $lightness: 0.5)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: oklab(80% 0.1 -0.3);\n}\n',
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $lightness: -10%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: oklab(20% 0.1 -0.3);\n}\n',
  },
  {
    name: 'lightness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $lightness: 0.9)}\n',
  },
  {
    name: 'lightness/above_max/output.css',
    data: 'a {\n  b: oklab(100% 0.1 -0.3);\n}\n',
  },
  {
    name: 'lightness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $lightness: -40%)}\n',
  },
  {
    name: 'lightness/below_min/output.css',
    data: 'a {\n  b: oklab(0% 0.1 -0.3);\n}\n',
  },
  {
    name: 'lightness/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $lightness: 120%)}\n',
  },
  {
    name: 'lightness/arg_above_max/output.css',
    data: 'a {\n  b: oklab(100% 0.1 -0.3);\n}\n',
  },
  {
    name: 'lightness/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $lightness: -130%)}\n',
  },
  {
    name: 'lightness/arg_below_min/output.css',
    data: 'a {\n  b: oklab(0% 0.1 -0.3);\n}\n',
  },
  {
    name: 'a/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $a: -0.2)}\n',
  },
  {
    name: 'a/unitless/output.css',
    data: 'a {\n  b: oklab(30% -0.1 -0.3);\n}\n',
  },
  {
    name: 'a/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $a: 40%)}\n',
  },
  {
    name: 'a/percent/output.css',
    data: 'a {\n  b: oklab(30% 0.26 -0.3);\n}\n',
  },
  {
    name: 'a/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $a: 0.7)}\n',
  },
  {
    name: 'a/above_max/output.css',
    data: 'a {\n  b: oklab(30% 0.8 -0.3);\n}\n',
  },
  {
    name: 'a/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $a: -0.6)}\n',
  },
  {
    name: 'a/below_min/output.css',
    data: 'a {\n  b: oklab(30% -0.5 -0.3);\n}\n',
  },
  {
    name: 'a/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $a: 1)}\n',
  },
  {
    name: 'a/arg_above_max/output.css',
    data: 'a {\n  b: oklab(30% 1.1 -0.3);\n}\n',
  },
  {
    name: 'a/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $a: -1)}\n',
  },
  {
    name: 'a/arg_below_min/output.css',
    data: 'a {\n  b: oklab(30% -0.9 -0.3);\n}\n',
  },
  {
    name: 'b/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $b: -0.05)}\n',
  },
  {
    name: 'b/unitless/output.css',
    data: 'a {\n  b: oklab(30% 0.1 -0.35);\n}\n',
  },
  {
    name: 'b/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $b: 20%)}\n',
  },
  {
    name: 'b/percent/output.css',
    data: 'a {\n  b: oklab(30% 0.1 -0.22);\n}\n',
  },
  {
    name: 'b/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $b: 0.8)}\n',
  },
  {
    name: 'b/above_max/output.css',
    data: 'a {\n  b: oklab(30% 0.1 0.5);\n}\n',
  },
  {
    name: 'b/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $b: -0.2)}\n',
  },
  {
    name: 'b/below_min/output.css',
    data: 'a {\n  b: oklab(30% 0.1 -0.5);\n}\n',
  },
  {
    name: 'b/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $b: 1)}\n',
  },
  {
    name: 'b/arg_above_max/output.css',
    data: 'a {\n  b: oklab(30% 0.1 0.7);\n}\n',
  },
  {
    name: 'b/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $b: -1)}\n',
  },
  {
    name: 'b/arg_below_min/output.css',
    data: 'a {\n  b: oklab(30% 0.1 -1.3);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $lightness: 40%, $a: 0.2, $b: 0.3)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: oklab(70% 0.3 0);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3 / 0.9), $lightness: 50%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: oklab(80% 0.1 -0.3 / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklab(30% 0.1 -0.3), $lightness: 50%, $alpha: -0.1)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: oklab(80% 0.1 -0.3 / 0.9);\n}\n',
  },
]
