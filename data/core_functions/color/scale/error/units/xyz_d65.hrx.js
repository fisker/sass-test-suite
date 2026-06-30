export default [
  {
    name: 'none/x/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: 1)}\n',
  },
  {
    name: 'none/x/error',
    data: 'Error: $x: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/y/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: 1)}\n',
  },
  {
    name: 'none/y/error',
    data: 'Error: $y: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/z/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: 1)}\n',
  },
  {
    name: 'none/z/error',
    data: 'Error: $z: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/x/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: 1px)}\n',
  },
  {
    name: 'wrong/x/error',
    data: 'Error: $x: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/y/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: 1px)}\n',
  },
  {
    name: 'wrong/y/error',
    data: 'Error: $y: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/z/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: 1px)}\n',
  },
  {
    name: 'wrong/z/error',
    data: 'Error: $z: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
