export default [
  {
    name: 'max/input.scss',
    data: '@use "sass:color";\na {b: color.blue(rgb(0, 0, 255))}\n',
  },
  {
    name: 'max/output.css',
    data: 'a {\n  b: 255;\n}\n',
  },
  {
    name: 'max/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.blue() is deprecated. Suggestion:\n\ncolor.channel($color, "blue", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.blue(rgb(0, 0, 255))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'min/input.scss',
    data: '@use "sass:color";\na {b: color.blue(rgb(0, 0, 0))}\n',
  },
  {
    name: 'min/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'min/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.blue() is deprecated. Suggestion:\n\ncolor.channel($color, "blue", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.blue(rgb(0, 0, 0))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.blue(rgb(0, 0, 123))}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: 123;\n}\n',
  },
  {
    name: 'middle/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.blue() is deprecated. Suggestion:\n\ncolor.channel($color, "blue", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.blue(rgb(0, 0, 123))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.blue($color: rgb(0, 0, 234))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 234;\n}\n',
  },
  {
    name: 'named/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.blue() is deprecated. Suggestion:\n\ncolor.channel($color, "blue", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.blue($color: rgb(0, 0, 234))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.blue()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.blue()}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function blue($color) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.blue(red, green)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: color.blue(red, green)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function blue($color) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.blue(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.blue(1)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.blue(color(srgb 1 1 1))}\n',
  },
  {
    name: 'error/non_legacy/error',
    data: "Error: color.blue() is only supported for legacy colors. Please use color.channel() instead with an explicit $space argument.\n  ,\n2 | a {b: color.blue(color(srgb 1 1 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
