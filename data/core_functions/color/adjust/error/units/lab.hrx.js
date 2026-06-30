// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/error/units/lab.hrx

export default [
  {
    name: 'lightness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(50% 30 -50), $lightness: 30px)}\n',
  },
  {
    name: 'lightness/error',
    data: 'Error: $lightness: Expected 30px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(lab(50% 30 -50), $lightness: 30px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'a/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(50% 30 -50), $a: 20px)}\n',
  },
  {
    name: 'a/error',
    data: 'Error: $a: Expected 20px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(lab(50% 30 -50), $a: 20px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'b/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(50% 30 -50), $b: 20px)}\n',
  },
  {
    name: 'b/error',
    data: 'Error: $b: Expected 20px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(lab(50% 30 -50), $b: 20px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
