// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/error/units/xyz.hrx

export default [
  {
    name: 'red/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz 0.2 0.5 0.7), $x: 0.5px)}\n',
  },
  {
    name: 'red/error',
    data: 'Error: $x: Expected 0.5px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(color(xyz 0.2 0.5 0.7), $x: 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'green/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz 0.2 0.5 0.7), $y: 0.5px)}\n',
  },
  {
    name: 'green/error',
    data: 'Error: $y: Expected 0.5px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(color(xyz 0.2 0.5 0.7), $y: 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blue/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz 0.2 0.5 0.7), $z: 0.5px)}\n',
  },
  {
    name: 'blue/error',
    data: 'Error: $z: Expected 0.5px to have unit "%" or no units.\n  ,\n2 | a {b: color.adjust(color(xyz 0.2 0.5 0.7), $z: 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
