// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/error/mixed_formats.hrx

export default [
  {
    name: 'red_and_hue/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $red: 1, $hue: 1)}\n',
  },
  {
    name: 'red_and_hue/error',
    data: "Error: $hue: Color space rgb doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(red, $red: 1, $hue: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'green_and_saturation/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $green: 1, $saturation: 1%)}\n',
  },
  {
    name: 'green_and_saturation/error',
    data: "Error: $saturation: Color space rgb doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(red, $green: 1, $saturation: 1%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'blue_and_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $blue: 1, $lightness: 1%)}\n',
  },
  {
    name: 'blue_and_lightness/error',
    data: "Error: $lightness: Color space rgb doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(red, $blue: 1, $lightness: 1%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'red_and_blackness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $red: 1, $blackness: 1%)}\n',
  },
  {
    name: 'red_and_blackness/error',
    data: "Error: $blackness: Color space rgb doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(red, $red: 1, $blackness: 1%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'green_and_whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $green: 1, $whiteness: 1%)}\n',
  },
  {
    name: 'green_and_whiteness/error',
    data: "Error: $whiteness: Color space rgb doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(red, $green: 1, $whiteness: 1%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'saturation_and_blackness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $saturation: 1%, $blackness: 1%)}\n',
  },
  {
    name: 'saturation_and_blackness/error',
    data: "Error: $blackness: Color space hsl doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(red, $saturation: 1%, $blackness: 1%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'lightness_and_whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 1%, $whiteness: 1%)}\n',
  },
  {
    name: 'lightness_and_whiteness/error',
    data: "Error: $whiteness: Color space hsl doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(red, $lightness: 1%, $whiteness: 1%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
