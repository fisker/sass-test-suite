// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hwb/four_args.hrx

export default [
  {
    name: 'hue/var/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(var(--c), 30%, 40%, 0.5)}\n',
  },
  {
    name: 'hue/var/output.css',
    data: 'a {\n  b: hwb(var(--c) 30% 40% / 0.5);\n}\n',
  },
  {
    name: 'hue/degenerate/positive_infinity/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(calc(infinity), 30%, 40%, 0.5)}\n',
  },
  {
    name: 'hue/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: hsla(0, 0%, 30%, 0.5);\n}\n',
  },
  {
    name: 'hue/degenerate/negative_infinity/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(calc(-infinity), 30%, 40%, 0.5)}\n',
  },
  {
    name: 'hue/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: hsla(0, 0%, 30%, 0.5);\n}\n',
  },
  {
    name: 'hue/degenerate/nan/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(calc(NaN), 30%, 40%, 0.5)}\n',
  },
  {
    name: 'hue/degenerate/nan/output.css',
    data: 'a {\n  b: hsla(0, 0%, 30%, 0.5);\n}\n',
  },
  {
    name: 'whiteness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 101%, 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/above_max/output.css',
    data: 'a {\n  b: hsla(0, 0%, 71.6312056738%, 0.5);\n}\n',
  },
  {
    name: 'whiteness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, -1%, 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/below_min/output.css',
    data: 'a {\n  b: hsla(0, 103.3898305085%, 29.5%, 0.5);\n}\n',
  },
  {
    name: 'whiteness/var/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, var(--c), 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/var/output.css',
    data: 'a {\n  b: hwb(0 var(--c) 40% / 0.5);\n}\n',
  },
  {
    name: 'whiteness/degenerate/positive_infinity/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, calc(infinity * 1%), 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: hsla(calc(NaN), calc(NaN * 1%), calc(NaN * 1%), 0.5);\n}\n',
  },
  {
    name: 'whiteness/degenerate/negative_infinity/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, calc(-infinity * 1%), 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: hsla(calc(NaN), calc(NaN * 1%), calc(NaN * 1%), 0.5);\n}\n',
  },
  {
    name: 'whiteness/degenerate/nan/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, calc(NaN * 1%), 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/degenerate/nan/output.css',
    data: 'a {\n  b: hsla(calc(NaN), calc(NaN * 1%), calc(NaN * 1%), 0.5);\n}\n',
  },
  {
    name: 'blackness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, 101%, 0.5)}\n',
  },
  {
    name: 'blackness/above_max/output.css',
    data: 'a {\n  b: hsla(0, 0%, 22.9007633588%, 0.5);\n}\n',
  },
  {
    name: 'blackness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, -1%, 0.5)}\n',
  },
  {
    name: 'blackness/below_min/output.css',
    data: 'a {\n  b: hsla(0, 102.8985507246%, 65.5%, 0.5);\n}\n',
  },
  {
    name: 'blackness/var/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, var(--c), 0.5)}\n',
  },
  {
    name: 'blackness/var/output.css',
    data: 'a {\n  b: hwb(0 30% var(--c) / 0.5);\n}\n',
  },
  {
    name: 'blackness/degenerate/positive_infinity/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, calc(infinity * 1%), 0.5)}\n',
  },
  {
    name: 'blackness/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: hsla(calc(NaN), calc(NaN * 1%), calc(NaN * 1%), 0.5);\n}\n',
  },
  {
    name: 'blackness/degenerate/negative_infinity/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, calc(-infinity * 1%), 0.5)}\n',
  },
  {
    name: 'blackness/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: hsla(calc(NaN), calc(NaN * 1%), calc(NaN * 1%), 0.5);\n}\n',
  },
  {
    name: 'blackness/degenerate/nan/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, calc(NaN * 1%), 0.5)}\n',
  },
  {
    name: 'blackness/degenerate/nan/output.css',
    data: 'a {\n  b: hsla(calc(NaN), calc(NaN * 1%), calc(NaN * 1%), 0.5);\n}\n',
  },
  {
    name: 'alpha/percent/negative/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, -10%)}\n',
  },
  {
    name: 'alpha/percent/negative/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0);\n}\n',
  },
  {
    name: 'alpha/percent/min/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 0%)}\n',
  },
  {
    name: 'alpha/percent/min/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0);\n}\n',
  },
  {
    name: 'alpha/percent/positive/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 45.6%)}\n',
  },
  {
    name: 'alpha/percent/positive/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0.456);\n}\n',
  },
  {
    name: 'alpha/percent/max/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 100%)}\n',
  },
  {
    name: 'alpha/percent/max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/percent/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 250%)}\n',
  },
  {
    name: 'alpha/percent/above_max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/unitless/negative/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, -10)}\n',
  },
  {
    name: 'alpha/unitless/negative/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0);\n}\n',
  },
  {
    name: 'alpha/unitless/min/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 0)}\n',
  },
  {
    name: 'alpha/unitless/min/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0);\n}\n',
  },
  {
    name: 'alpha/unitless/positive/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 0.456)}\n',
  },
  {
    name: 'alpha/unitless/positive/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0.456);\n}\n',
  },
  {
    name: 'alpha/unitless/max/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 1)}\n',
  },
  {
    name: 'alpha/unitless/max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/unitless/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 250)}\n',
  },
  {
    name: 'alpha/unitless/above_max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/var/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, var(--c))}\n',
  },
  {
    name: 'alpha/var/output.css',
    data: 'a {\n  b: hwb(0 0% 0% / var(--c));\n}\n',
  },
  {
    name: 'alpha/degenerate/positive_infinity/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, 40%, calc(infinity))}\n',
  },
  {
    name: 'alpha/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: hsl(0, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'alpha/degenerate/negative_infinity/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, 40%, calc(-infinity))}\n',
  },
  {
    name: 'alpha/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: hsla(0, 33.3333333333%, 45%, 0);\n}\n',
  },
  {
    name: 'alpha/degenerate/nan/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, 40%, calc(NaN))}\n',
  },
  {
    name: 'alpha/degenerate/nan/output.css',
    data: 'a {\n  b: hsla(0, 33.3333333333%, 45%, 0);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.hwb($hue: 180, $whiteness: 30%, $blackness: 40%, $alpha: 0.4)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.4);\n}\n',
  },
]
