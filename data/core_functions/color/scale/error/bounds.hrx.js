export default [
  {
    name: 'legacy/too_low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $saturation: -100.001%)}\n',
  },
  {
    name: 'legacy/too_low/error',
    data: "Error: $saturation: Expected -100.001% to be within -100% and 100%.\n  ,\n2 | a {b: color.scale(red, $saturation: -100.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'legacy/too_high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $whiteness: 100.001%)}\n',
  },
  {
    name: 'legacy/too_high/error',
    data: "Error: $whiteness: Expected 100.001% to be within -100% and 100%.\n  ,\n2 | a {b: color.scale(red, $whiteness: 100.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'modern/too_low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lab(50% -70 60), $a: -100.001%)}\n',
  },
  {
    name: 'modern/too_low/error',
    data: "Error: $a: Expected -100.001% to be within -100% and 100%.\n  ,\n2 | a {b: color.scale(lab(50% -70 60), $a: -100.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'modern/too_high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lab(50% -70 60), $b: 100.001%)}\n',
  },
  {
    name: 'modern/too_high/error',
    data: "Error: $b: Expected 100.001% to be within -100% and 100%.\n  ,\n2 | a {b: color.scale(lab(50% -70 60), $b: 100.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
