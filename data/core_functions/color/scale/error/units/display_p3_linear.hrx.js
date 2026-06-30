export default [
  {
    name: 'none/red/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: 1)}\n',
  },
  {
    name: 'none/red/error',
    data: 'Error: $red: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/green/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: 1)}\n',
  },
  {
    name: 'none/green/error',
    data: 'Error: $green: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/blue/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: 1)}\n',
  },
  {
    name: 'none/blue/error',
    data: 'Error: $blue: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/red/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: 1px)}\n',
  },
  {
    name: 'wrong/red/error',
    data: 'Error: $red: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/green/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: 1px)}\n',
  },
  {
    name: 'wrong/green/error',
    data: 'Error: $green: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/blue/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: 1px)}\n',
  },
  {
    name: 'wrong/blue/error',
    data: 'Error: $blue: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
