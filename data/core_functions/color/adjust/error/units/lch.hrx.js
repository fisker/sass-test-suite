// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/error/units/lch.hrx

export default [
  {
    name: 'lightness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(50% 30 50deg), $lightness: 30px)}\n',
  },
  {
    name: 'lightness/error',
    data: 'Error: $lightness: Expected 30px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(lch(50% 30 50deg), $lightness: 30px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'chroma/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(50% 30 50deg), $chroma: 20px)}\n',
  },
  {
    name: 'chroma/error',
    data: 'Error: $chroma: Expected 20px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(lch(50% 30 50deg), $chroma: 20px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'hue/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lch(50% 30 50deg), $hue: 20%)}\n',
  },
  {
    name: 'hue/error',
    data: "Error: $hue: Expected 20% to have an angle unit (deg, grad, rad, turn).\n  ,\n2 | a {b: color.adjust(lch(50% 30 50deg), $hue: 20%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
