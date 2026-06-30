export default [
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $lightness: 50)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: lab(80% 60 -100);\n}\n',
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $lightness: -10%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: lab(20% 60 -100);\n}\n',
  },
  {
    name: 'lightness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $lightness: 90)}\n',
  },
  {
    name: 'lightness/above_max/output.css',
    data: 'a {\n  b: lab(100% 60 -100);\n}\n',
  },
  {
    name: 'lightness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $lightness: -40%)}\n',
  },
  {
    name: 'lightness/below_min/output.css',
    data: 'a {\n  b: lab(0% 60 -100);\n}\n',
  },
  {
    name: 'lightness/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $lightness: 120%)}\n',
  },
  {
    name: 'lightness/arg_above_max/output.css',
    data: 'a {\n  b: lab(100% 60 -100);\n}\n',
  },
  {
    name: 'lightness/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $lightness: -130%)}\n',
  },
  {
    name: 'lightness/arg_below_min/output.css',
    data: 'a {\n  b: lab(0% 60 -100);\n}\n',
  },
  {
    name: 'a/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $a: -30)}\n',
  },
  {
    name: 'a/unitless/output.css',
    data: 'a {\n  b: lab(30% 30 -100);\n}\n',
  },
  {
    name: 'a/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $a: 40%)}\n',
  },
  {
    name: 'a/percent/output.css',
    data: 'a {\n  b: lab(30% 110 -100);\n}\n',
  },
  {
    name: 'a/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $a: 70)}\n',
  },
  {
    name: 'a/above_max/output.css',
    data: 'a {\n  b: lab(30% 130 -100);\n}\n',
  },
  {
    name: 'a/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $a: -200)}\n',
  },
  {
    name: 'a/below_min/output.css',
    data: 'a {\n  b: lab(30% -140 -100);\n}\n',
  },
  {
    name: 'a/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $a: 130)}\n',
  },
  {
    name: 'a/arg_above_max/output.css',
    data: 'a {\n  b: lab(30% 190 -100);\n}\n',
  },
  {
    name: 'a/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $a: -500)}\n',
  },
  {
    name: 'a/arg_below_min/output.css',
    data: 'a {\n  b: lab(30% -440 -100);\n}\n',
  },
  {
    name: 'b/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $b: -30)}\n',
  },
  {
    name: 'b/unitless/output.css',
    data: 'a {\n  b: lab(30% 60 -130);\n}\n',
  },
  {
    name: 'b/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $b: 20%)}\n',
  },
  {
    name: 'b/percent/output.css',
    data: 'a {\n  b: lab(30% 60 -75);\n}\n',
  },
  {
    name: 'b/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $b: 70)}\n',
  },
  {
    name: 'b/above_max/output.css',
    data: 'a {\n  b: lab(30% 60 -30);\n}\n',
  },
  {
    name: 'b/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $b: -80)}\n',
  },
  {
    name: 'b/below_min/output.css',
    data: 'a {\n  b: lab(30% 60 -180);\n}\n',
  },
  {
    name: 'b/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $b: 500)}\n',
  },
  {
    name: 'b/arg_above_max/output.css',
    data: 'a {\n  b: lab(30% 60 400);\n}\n',
  },
  {
    name: 'b/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $b: -500)}\n',
  },
  {
    name: 'b/arg_below_min/output.css',
    data: 'a {\n  b: lab(30% 60 -600);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $lightness: 40%, $a: 50, $b: 60)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: lab(70% 110 -40);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100 / 0.9), $lightness: 50%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: lab(80% 60 -100 / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(30% 60 -100), $lightness: 50%, $alpha: -0.1)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: lab(80% 60 -100 / 0.9);\n}\n',
  },
]
