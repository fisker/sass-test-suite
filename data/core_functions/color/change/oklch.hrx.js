export default [
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $lightness: 0.3)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: oklch(30% 0.2 30deg);\n}\n',
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $lightness: 30%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: oklch(30% 0.2 30deg);\n}\n',
  },
  {
    name: 'lightness/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $lightness: 120%)}\n',
  },
  {
    name: 'lightness/out_of_range/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz 2.0602077969 1.6344741917 1.0169248199) 100%, black);\n}\n',
  },
  {
    name: 'lightness/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $lightness: none)}\n',
  },
  {
    name: 'lightness/none/output.css',
    data: 'a {\n  b: oklch(none 0.2 30deg);\n}\n',
  },
  {
    name: 'chroma/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $chroma: 0.1)}\n',
  },
  {
    name: 'chroma/unitless/output.css',
    data: 'a {\n  b: oklch(50% 0.1 30deg);\n}\n',
  },
  {
    name: 'chroma/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $chroma: 40%)}\n',
  },
  {
    name: 'chroma/percent/output.css',
    data: 'a {\n  b: oklch(50% 0.16 30deg);\n}\n',
  },
  {
    name: 'chroma/negative/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $chroma: -0.1)}\n',
  },
  {
    name: 'chroma/negative/output.css',
    data: 'a {\n  b: oklch(50% 0.1 210deg);\n}\n',
  },
  {
    name: 'chroma/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $chroma: 1)}\n',
  },
  {
    name: 'chroma/out_of_range/output.css',
    data: 'a {\n  b: oklch(50% 1 30deg);\n}\n',
  },
  {
    name: 'chroma/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $chroma: none)}\n',
  },
  {
    name: 'chroma/none/output.css',
    data: 'a {\n  b: oklch(50% none 30deg);\n}\n',
  },
  {
    name: 'hue/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $hue: 50deg)}\n',
  },
  {
    name: 'hue/unitless/output.css',
    data: 'a {\n  b: oklch(50% 0.2 50deg);\n}\n',
  },
  {
    name: 'hue/negative/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $hue: -20deg)}\n',
  },
  {
    name: 'hue/negative/output.css',
    data: 'a {\n  b: oklch(50% 0.2 340deg);\n}\n',
  },
  {
    name: 'hue/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $hue: 400deg)}\n',
  },
  {
    name: 'hue/above_max/output.css',
    data: 'a {\n  b: oklch(50% 0.2 40deg);\n}\n',
  },
  {
    name: 'hue/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $hue: none)}\n',
  },
  {
    name: 'hue/none/output.css',
    data: 'a {\n  b: oklch(50% 0.2 none);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $lightness: 20%, $chroma: 0.1, $hue: 40deg)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: oklch(20% 0.1 40deg);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg / 0.9), $lightness: 30%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: oklch(30% 0.2 30deg / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 30deg), $lightness: 30%, $alpha: 0.9)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: oklch(30% 0.2 30deg / 0.9);\n}\n',
  },
]
