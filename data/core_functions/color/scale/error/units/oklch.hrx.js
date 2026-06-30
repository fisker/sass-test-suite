// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/error/units/oklch.hrx

export default [
  {
    name: 'none/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(30% 70% 200deg), $lightness: 1)}\n',
  },
  {
    name: 'none/lightness/error',
    data: 'Error: $lightness: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(lch(30% 70% 200deg), $lightness: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(30% 70% 200deg), $chroma: 1)}\n',
  },
  {
    name: 'none/chroma/error',
    data: 'Error: $chroma: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(lch(30% 70% 200deg), $chroma: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(30% 70% 200deg), $lightness: 1px)}\n',
  },
  {
    name: 'wrong/lightness/error',
    data: 'Error: $lightness: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(lch(30% 70% 200deg), $lightness: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lch(30% 70% 200deg), $chroma: 1px)}\n',
  },
  {
    name: 'wrong/chroma/error',
    data: 'Error: $chroma: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(lch(30% 70% 200deg), $chroma: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
