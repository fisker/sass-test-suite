export default [
  {
    name: 'red/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(display-p3-linear 0.2 0.5 0.7), $red: 0.5px)}\n',
  },
  {
    name: 'red/error',
    data: 'Error: $red: Expected 0.5px to have unit "%" or no units.\n  ,\n2 | a {b: color.change(color(display-p3-linear 0.2 0.5 0.7), $red: 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'green/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(display-p3-linear 0.2 0.5 0.7), $green: 0.5px)}\n',
  },
  {
    name: 'green/error',
    data: 'Error: $green: Expected 0.5px to have unit "%" or no units.\n  ,\n2 | a {b: color.change(color(display-p3-linear 0.2 0.5 0.7), $green: 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blue/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(display-p3-linear 0.2 0.5 0.7), $blue: 0.5px)}\n',
  },
  {
    name: 'blue/error',
    data: 'Error: $blue: Expected 0.5px to have unit "%" or no units.\n  ,\n2 | a {b: color.change(color(display-p3-linear 0.2 0.5 0.7), $blue: 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
