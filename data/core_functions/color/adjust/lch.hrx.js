export default [
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $lightness: 50)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: lch(80% 60 180deg);\n}\n',
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $lightness: -10%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: lch(20% 60 180deg);\n}\n',
  },
  {
    name: 'lightness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $lightness: 90)}\n',
  },
  {
    name: 'lightness/above_max/output.css',
    data: 'a {\n  b: lch(100% 60 180deg);\n}\n',
  },
  {
    name: 'lightness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $lightness: -40%)}\n',
  },
  {
    name: 'lightness/below_min/output.css',
    data: 'a {\n  b: lch(0% 60 180deg);\n}\n',
  },
  {
    name: 'lightness/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $lightness: 120%)}\n',
  },
  {
    name: 'lightness/arg_above_max/output.css',
    data: 'a {\n  b: lch(100% 60 180deg);\n}\n',
  },
  {
    name: 'lightness/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $lightness: -130%)}\n',
  },
  {
    name: 'lightness/arg_below_min/output.css',
    data: 'a {\n  b: lch(0% 60 180deg);\n}\n',
  },
  {
    name: 'chroma/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $chroma: -30)}\n',
  },
  {
    name: 'chroma/unitless/output.css',
    data: 'a {\n  b: lch(30% 30 180deg);\n}\n',
  },
  {
    name: 'chroma/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $chroma: 40%)}\n',
  },
  {
    name: 'chroma/percent/output.css',
    data: 'a {\n  b: lch(30% 120 180deg);\n}\n',
  },
  {
    name: 'chroma/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $chroma: 100)}\n',
  },
  {
    name: 'chroma/above_max/output.css',
    data: 'a {\n  b: lch(30% 160 180deg);\n}\n',
  },
  {
    name: 'chroma/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $chroma: -100)}\n',
  },
  {
    name: 'chroma/below_min/output.css',
    data: 'a {\n  b: lch(30% 0 180deg);\n}\n',
  },
  {
    name: 'chroma/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $chroma: 200)}\n',
  },
  {
    name: 'chroma/arg_above_max/output.css',
    data: 'a {\n  b: lch(30% 260 180deg);\n}\n',
  },
  {
    name: 'chroma/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $chroma: -200)}\n',
  },
  {
    name: 'chroma/arg_below_min/output.css',
    data: 'a {\n  b: lch(30% 0 180deg);\n}\n',
  },
  {
    name: 'hue/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $hue: -30)}\n',
  },
  {
    name: 'hue/unitless/output.css',
    data: 'a {\n  b: lch(30% 60 150deg);\n}\n',
  },
  {
    name: 'hue/turn/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $hue: 0.5turn)}\n',
  },
  {
    name: 'hue/turn/output.css',
    data: 'a {\n  b: lch(30% 60 0deg);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $lightness: 40%, $chroma: 50, $hue: 60)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: lch(70% 110 240deg);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg / 0.9), $lightness: 50%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: lch(80% 60 180deg / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(30% 60 180deg), $lightness: 50%, $alpha: -0.1)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: lch(80% 60 180deg / 0.9);\n}\n',
  },
]
