// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/change/lch.hrx

export default [
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $lightness: 30)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: lch(30% 20 30deg);\n}\n',
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $lightness: 30%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: lch(30% 20 30deg);\n}\n',
  },
  {
    name: 'lightness/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $lightness: 120%)}\n',
  },
  {
    name: 'lightness/out_of_range/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 1.6569354424 1.6040925936 1.5400032443) 100%, black);\n}\n',
  },
  {
    name: 'lightness/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $lightness: none)}\n',
  },
  {
    name: 'lightness/none/output.css',
    data: 'a {\n  b: lch(none 20 30deg);\n}\n',
  },
  {
    name: 'chroma/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $chroma: 50)}\n',
  },
  {
    name: 'chroma/unitless/output.css',
    data: 'a {\n  b: lch(50% 50 30deg);\n}\n',
  },
  {
    name: 'chroma/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $chroma: 40%)}\n',
  },
  {
    name: 'chroma/percent/output.css',
    data: 'a {\n  b: lch(50% 60 30deg);\n}\n',
  },
  {
    name: 'chroma/negative/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $chroma: -10)}\n',
  },
  {
    name: 'chroma/negative/output.css',
    data: 'a {\n  b: lch(50% 10 210deg);\n}\n',
  },
  {
    name: 'chroma/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $chroma: 200)}\n',
  },
  {
    name: 'chroma/out_of_range/output.css',
    data: 'a {\n  b: lch(50% 200 30deg);\n}\n',
  },
  {
    name: 'chroma/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $chroma: none)}\n',
  },
  {
    name: 'chroma/none/output.css',
    data: 'a {\n  b: lch(50% none 30deg);\n}\n',
  },
  {
    name: 'hue/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $hue: 50deg)}\n',
  },
  {
    name: 'hue/unitless/output.css',
    data: 'a {\n  b: lch(50% 20 50deg);\n}\n',
  },
  {
    name: 'hue/negative/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $hue: -20deg)}\n',
  },
  {
    name: 'hue/negative/output.css',
    data: 'a {\n  b: lch(50% 20 340deg);\n}\n',
  },
  {
    name: 'hue/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $hue: 400deg)}\n',
  },
  {
    name: 'hue/above_max/output.css',
    data: 'a {\n  b: lch(50% 20 40deg);\n}\n',
  },
  {
    name: 'hue/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $hue: none)}\n',
  },
  {
    name: 'hue/none/output.css',
    data: 'a {\n  b: lch(50% 20 none);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $lightness: 20%, $chroma: 30, $hue: 40deg)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: lch(20% 30 40deg);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg / 0.9), $lightness: 30%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: lch(30% 20 30deg / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(lch(50% 20 30deg), $lightness: 30%, $alpha: 0.9)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: lch(30% 20 30deg / 0.9);\n}\n',
  },
]
