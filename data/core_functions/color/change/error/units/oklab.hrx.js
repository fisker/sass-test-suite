export default [
  {
    name: 'lightness/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $lightness: 0.3px)}\n',
  },
  {
    name: 'lightness/error',
    data: 'Error: $lightness: Expected 0.3px to have unit "%" or no units.\n  ,\n2 | a {b: color.change(oklab(50% 0.2 -0.3), $lightness: 0.3px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'a/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $a: 0.2px)}\n',
  },
  {
    name: 'a/error',
    data: 'Error: $a: Expected 0.2px to have unit "%" or no units.\n  ,\n2 | a {b: color.change(oklab(50% 0.2 -0.3), $a: 0.2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'b/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $b: 0.2px)}\n',
  },
  {
    name: 'b/error',
    data: 'Error: $b: Expected 0.2px to have unit "%" or no units.\n  ,\n2 | a {b: color.change(oklab(50% 0.2 -0.3), $b: 0.2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
