export default [
  {
    name: 'adjust_color/input.scss',
    data: '@use "sass:color";\na {b: color.adjust-color(#abcdef, $red: 10)}\n',
  },
  {
    name: 'adjust_color/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: color.adjust-color(#abcdef, $red: 10)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'scale_color/input.scss',
    data: '@use "sass:color";\na {b: color.scale-color(#abcdef, $red: 10%)}\n',
  },
  {
    name: 'scale_color/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: color.scale-color(#abcdef, $red: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'change_color/input.scss',
    data: '@use "sass:color";\na {b: color.change-color(#abcdef, $red: 10)}\n',
  },
  {
    name: 'change_color/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: color.change-color(#abcdef, $red: 10)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'adjust_hue/input.scss',
    data: '@use "sass:color";\na {b: color.adjust-hue(#abcdef, 10)}\n',
  },
  {
    name: 'adjust_hue/error',
    data: "Error: The function adjust-hue() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $hue: 10)\n\nMore info: https://sass-lang.com/documentation/functions/color#adjust-hue\n  ,\n2 | a {b: color.adjust-hue(#abcdef, 10)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'lighten/input.scss',
    data: '@use "sass:color";\na {b: color.lighten(#abcdef, 10%)}\n',
  },
  {
    name: 'lighten/error',
    data: "Error: The function lighten() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $lightness: 10%)\n\nMore info: https://sass-lang.com/documentation/functions/color#lighten\n  ,\n2 | a {b: color.lighten(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'darken/input.scss',
    data: '@use "sass:color";\na {b: color.darken(#abcdef, 10%)}\n',
  },
  {
    name: 'darken/error',
    data: "Error: The function darken() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $lightness: -10%)\n\nMore info: https://sass-lang.com/documentation/functions/color#darken\n  ,\n2 | a {b: color.darken(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'saturate/input.scss',
    data: '@use "sass:color";\na {b: color.saturate(#abcdef, 10%)}\n',
  },
  {
    name: 'saturate/error',
    data: "Error: The function saturate() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $saturation: 10%)\n\nMore info: https://sass-lang.com/documentation/functions/color#saturate\n  ,\n2 | a {b: color.saturate(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'desaturate/input.scss',
    data: '@use "sass:color";\na {b: color.desaturate(#abcdef, 10%)}\n',
  },
  {
    name: 'desaturate/error',
    data: "Error: The function desaturate() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $saturation: -10%)\n\nMore info: https://sass-lang.com/documentation/functions/color#desaturate\n  ,\n2 | a {b: color.desaturate(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'opacify/input.scss',
    data: '@use "sass:color";\na {b: color.opacify(#abcdef, 0.5)}\n',
  },
  {
    name: 'opacify/error',
    data: "Error: The function opacify() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $alpha: 0.5)\n\nMore info: https://sass-lang.com/documentation/functions/color#opacify\n  ,\n2 | a {b: color.opacify(#abcdef, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'fade_in/input.scss',
    data: '@use "sass:color";\na {b: color.fade-in(#abcdef, 0.5)}\n',
  },
  {
    name: 'fade_in/error',
    data: "Error: The function fade-in() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $alpha: 0.5)\n\nMore info: https://sass-lang.com/documentation/functions/color#fade-in\n  ,\n2 | a {b: color.fade-in(#abcdef, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'transparentize/input.scss',
    data: '@use "sass:color";\na {b: color.transparentize(#abcdef, 0.5)}\n',
  },
  {
    name: 'transparentize/error',
    data: "Error: The function transparentize() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $alpha: -0.5)\n\nMore info: https://sass-lang.com/documentation/functions/color#transparentize\n  ,\n2 | a {b: color.transparentize(#abcdef, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'fade_out/input.scss',
    data: '@use "sass:color";\na {b: color.fade-out(#abcdef, 0.5)}\n',
  },
  {
    name: 'fade_out/error',
    data: "Error: The function fade-out() isn't in the sass:color module.\n\nRecommendation: color.adjust(#abcdef, $alpha: -0.5)\n\nMore info: https://sass-lang.com/documentation/functions/color#fade-out\n  ,\n2 | a {b: color.fade-out(#abcdef, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
