// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/change/error/bounds.hrx

export default [
  {
    name: 'alpha/too_low/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $alpha: -0.001)}\n',
  },
  {
    name: 'alpha/too_low/error',
    data: "Error: $alpha: Expected -0.001 to be within 0 and 1.\n  ,\n2 | a {b: color.change(red, $alpha: -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/too_high/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $alpha: 1.001)}\n',
  },
  {
    name: 'alpha/too_high/error',
    data: "Error: $alpha: Expected 1.001 to be within 0 and 1.\n  ,\n2 | a {b: color.change(red, $alpha: 1.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/unit/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $alpha: 150%)}\n',
  },
  {
    name: 'alpha/unit/error',
    data: "Error: $alpha: Expected 150% to be within 0% and 100%.\n  ,\n2 | a {b: color.change(red, $alpha: 150%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
