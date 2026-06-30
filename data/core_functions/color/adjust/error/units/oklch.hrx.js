export default [
  {
    name: 'lightness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(50% 0.3 50deg), $lightness: 30px)}\n',
  },
  {
    name: 'lightness/error',
    data: 'Error: $lightness: Expected 30px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(oklch(50% 0.3 50deg), $lightness: 30px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'chroma/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(50% 0.3 50deg), $chroma: 0.2px)}\n',
  },
  {
    name: 'chroma/error',
    data: 'Error: $chroma: Expected 0.2px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(oklch(50% 0.3 50deg), $chroma: 0.2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'hue/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(50% 0.3 50deg), $hue: 20%)}\n',
  },
  {
    name: 'hue/error',
    data: "Error: $hue: Expected 20% to have an angle unit (deg, grad, rad, turn).\n  ,\n2 | a {b: color.adjust(oklch(50% 0.3 50deg), $hue: 20%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
