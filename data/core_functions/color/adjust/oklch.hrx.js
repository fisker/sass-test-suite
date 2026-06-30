// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/oklch.hrx

export default [
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $lightness: 0.5)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: oklch(80% 0.15 180deg);\n}\n',
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $lightness: -10%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: oklch(20% 0.15 180deg);\n}\n',
  },
  {
    name: 'lightness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $lightness: 0.9)}\n',
  },
  {
    name: 'lightness/above_max/output.css',
    data: 'a {\n  b: oklch(100% 0.15 180deg);\n}\n',
  },
  {
    name: 'lightness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $lightness: -40%)}\n',
  },
  {
    name: 'lightness/below_min/output.css',
    data: 'a {\n  b: oklch(0% 0.15 180deg);\n}\n',
  },
  {
    name: 'lightness/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $lightness: 120%)}\n',
  },
  {
    name: 'lightness/arg_above_max/output.css',
    data: 'a {\n  b: oklch(100% 0.15 180deg);\n}\n',
  },
  {
    name: 'lightness/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $lightness: -130%)}\n',
  },
  {
    name: 'lightness/arg_below_min/output.css',
    data: 'a {\n  b: oklch(0% 0.15 180deg);\n}\n',
  },
  {
    name: 'chroma/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $chroma: -0.1)}\n',
  },
  {
    name: 'chroma/unitless/output.css',
    data: 'a {\n  b: oklch(30% 0.05 180deg);\n}\n',
  },
  {
    name: 'chroma/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $chroma: 40%)}\n',
  },
  {
    name: 'chroma/percent/output.css',
    data: 'a {\n  b: oklch(30% 0.31 180deg);\n}\n',
  },
  {
    name: 'chroma/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $chroma: 0.3)}\n',
  },
  {
    name: 'chroma/above_max/output.css',
    data: 'a {\n  b: oklch(30% 0.45 180deg);\n}\n',
  },
  {
    name: 'chroma/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $chroma: -0.2)}\n',
  },
  {
    name: 'chroma/below_min/output.css',
    data: 'a {\n  b: oklch(30% 0 180deg);\n}\n',
  },
  {
    name: 'chroma/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $chroma: 1)}\n',
  },
  {
    name: 'chroma/arg_above_max/output.css',
    data: 'a {\n  b: oklch(30% 1.15 180deg);\n}\n',
  },
  {
    name: 'chroma/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $chroma: -1)}\n',
  },
  {
    name: 'chroma/arg_below_min/output.css',
    data: 'a {\n  b: oklch(30% 0 180deg);\n}\n',
  },
  {
    name: 'hue/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $hue: -30)}\n',
  },
  {
    name: 'hue/unitless/output.css',
    data: 'a {\n  b: oklch(30% 0.15 150deg);\n}\n',
  },
  {
    name: 'hue/turn/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $hue: 0.5turn)}\n',
  },
  {
    name: 'hue/turn/output.css',
    data: 'a {\n  b: oklch(30% 0.15 0deg);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $lightness: 40%, $chroma: 0.2, $hue: 60)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: oklch(70% 0.35 240deg);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg / 0.9), $lightness: 50%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: oklch(80% 0.15 180deg / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(30% 0.15 180deg), $lightness: 50%, $alpha: -0.1)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: oklch(80% 0.15 180deg / 0.9);\n}\n',
  },
]
