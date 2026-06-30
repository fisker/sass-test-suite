// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/error/polar.hrx

export default [
  {
    name: 'legacy/input.scss',
    data: '@use "sass:color";\na {b: color.scale(white, $hue: 10%)}\n',
  },
  {
    name: 'legacy/error',
    data: "Error: $hue: Channel isn't scalable.\n  ,\n2 | a {b: color.scale(white, $hue: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'lch/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(50% 30% 180deg), $hue: 10%)}\n',
  },
  {
    name: 'lch/error',
    data: "Error: $hue: Channel isn't scalable.\n  ,\n2 | a {b: color.scale(lch(50% 30% 180deg), $hue: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'oklch/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(50% 30% 180deg), $hue: 10%)}\n',
  },
  {
    name: 'oklch/error',
    data: "Error: $hue: Channel isn't scalable.\n  ,\n2 | a {b: color.scale(lch(50% 30% 180deg), $hue: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
