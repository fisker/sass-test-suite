// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hwb/error/four_args.hrx

export default [
  {
    name: 'hue/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb("foo", 30%, 40%, 0.5)}\n',
  },
  {
    name: 'hue/type/error',
    data: 'Error: Expected hue channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb("foo", 30%, 40%, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'whiteness/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, "foo", 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/type/error',
    data: 'Error: Expected whiteness channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb(0, "foo", 40%, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'whiteness/unit/none/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30, 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/unit/none/error',
    data: 'Error: $whiteness: Expected 30 to have unit "%".\n  ,\n2 | a {b: color.hwb(0, 30, 40%, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'whiteness/unit/wrong/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30px, 40%, 0.5)}\n',
  },
  {
    name: 'whiteness/unit/wrong/error',
    data: 'Error: $whiteness: Expected 30px to have unit "%".\n  ,\n2 | a {b: color.hwb(0, 30px, 40%, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blackness/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, "foo", 0.5)}\n',
  },
  {
    name: 'blackness/type/error',
    data: 'Error: Expected blackness channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb(0, 30%, "foo", 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blackness/unit/none/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, 40, 0.5)}\n',
  },
  {
    name: 'blackness/unit/none/error',
    data: 'Error: $blackness: Expected 40 to have unit "%".\n  ,\n2 | a {b: color.hwb(0, 30%, 40, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blackness/unit/wrong/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 30%, 40px, 0.5)}\n',
  },
  {
    name: 'blackness/unit/wrong/error',
    data: 'Error: $blackness: Expected 40px to have unit "%".\n  ,\n2 | a {b: color.hwb(0, 30%, 40px, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'alpha/unit/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 0%, 0%, 0.5px)}\n',
  },
  {
    name: 'alpha/unit/error',
    data: 'Error: $alpha: Expected 0.5px to have unit "%" or no units.\n  ,\n2 | a {b: color.hwb(0, 0%, 0%, 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
