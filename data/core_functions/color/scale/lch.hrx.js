// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/lch.hrx

export default [
  {
    name: 'lightness/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $lightness: 100%)}\n',
  },
  {
    name: 'lightness/max/output.css',
    data: 'a {\n  b: lch(100% 30 80deg);\n}\n',
  },
  {
    name: 'lightness/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $lightness: -100%)}\n',
  },
  {
    name: 'lightness/min/output.css',
    data: 'a {\n  b: lch(0% 30 80deg);\n}\n',
  },
  {
    name: 'lightness/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $lightness: 0%)}\n',
  },
  {
    name: 'lightness/zero/output.css',
    data: 'a {\n  b: lch(70% 30 80deg);\n}\n',
  },
  {
    name: 'lightness/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $lightness: -33%)}\n',
  },
  {
    name: 'lightness/low/output.css',
    data: 'a {\n  b: lch(46.9% 30 80deg);\n}\n',
  },
  {
    name: 'lightness/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $lightness: 86%)}\n',
  },
  {
    name: 'lightness/high/output.css',
    data: 'a {\n  b: lch(95.8% 30 80deg);\n}\n',
  },
  {
    name: 'chroma/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $chroma: 100%)}\n',
  },
  {
    name: 'chroma/max/output.css',
    data: 'a {\n  b: lch(70% 150 80deg);\n}\n',
  },
  {
    name: 'chroma/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $chroma: -100%)}\n',
  },
  {
    name: 'chroma/min/output.css',
    data: 'a {\n  b: lch(70% 0 80deg);\n}\n',
  },
  {
    name: 'chroma/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $chroma: 0%)}\n',
  },
  {
    name: 'chroma/zero/output.css',
    data: 'a {\n  b: lch(70% 30 80deg);\n}\n',
  },
  {
    name: 'chroma/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $chroma: -86%)}\n',
  },
  {
    name: 'chroma/low/output.css',
    data: 'a {\n  b: lch(70% 4.2 80deg);\n}\n',
  },
  {
    name: 'chroma/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $chroma: 12%)}\n',
  },
  {
    name: 'chroma/high/output.css',
    data: 'a {\n  b: lch(70% 44.4 80deg);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(70% 20% 80deg), $lightness: 12%, $chroma: 24%)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: lch(73.6% 58.8 80deg);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(lch(70% 20% 80deg / 0.3), $lightness: 12%, $chroma: 24%);\n}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: lch(73.6% 58.8 80deg / 0.3);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(\n    lch(70% 20% 80deg),\n    $lightness: 12%, $chroma: 24%, $alpha: -70%\n  );\n}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: lch(73.6% 58.8 80deg / 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.scale($color: lch(70% 20% 80deg), $lightness: 12%, $chroma: 24%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: lch(73.6% 58.8 80deg);\n}\n',
  },
]
