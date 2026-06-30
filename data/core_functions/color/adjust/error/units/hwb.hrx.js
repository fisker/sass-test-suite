export default [
  {
    name: 'none/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(white, $whiteness: 1)}\n',
  },
  {
    name: 'none/whiteness/error',
    data: 'Error: $whiteness: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.adjust(white, $whiteness: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $blackness: 1)}\n',
  },
  {
    name: 'none/blackness/error',
    data: 'Error: $blackness: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.adjust(black, $blackness: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(white, $whiteness: 1px)}\n',
  },
  {
    name: 'wrong/whiteness/error',
    data: 'Error: $whiteness: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.adjust(white, $whiteness: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $blackness: 1px)}\n',
  },
  {
    name: 'wrong/blackness/error',
    data: 'Error: $blackness: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.adjust(black, $blackness: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
