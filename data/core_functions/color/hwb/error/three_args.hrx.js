export default [
  {
    name: 'hue/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb("foo", 100%, 50%)}\n',
  },
  {
    name: 'hue/type/error',
    data: 'Error: Expected hue channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb("foo", 100%, 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'whiteness/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, "foo", 50%)}\n',
  },
  {
    name: 'whiteness/type/error',
    data: 'Error: Expected whiteness channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb(0, "foo", 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blackness/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0, 100%, "foo")}\n',
  },
  {
    name: 'blackness/type/error',
    data: 'Error: Expected blackness channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb(0, 100%, "foo")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
