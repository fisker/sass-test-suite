// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/saturation.hrx

export default [
  {
    name: 'max/input.scss',
    data: '@use "sass:color";\na {b: color.saturation(hsl(0, 100%, 50%))}\n',
  },
  {
    name: 'max/output.css',
    data: 'a {\n  b: 100%;\n}\n',
  },
  {
    name: 'max/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.saturation() is deprecated. Suggestion:\n\ncolor.channel($color, "saturation", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.saturation(hsl(0, 100%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'min/input.scss',
    data: '@use "sass:color";\na {b: color.saturation(hsl(0, 0%, 50%))}\n',
  },
  {
    name: 'min/output.css',
    data: 'a {\n  b: 0%;\n}\n',
  },
  {
    name: 'min/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.saturation() is deprecated. Suggestion:\n\ncolor.channel($color, "saturation", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.saturation(hsl(0, 0%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.saturation(hsl(0, 50%, 50%))}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: 50%;\n}\n',
  },
  {
    name: 'middle/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.saturation() is deprecated. Suggestion:\n\ncolor.channel($color, "saturation", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.saturation(hsl(0, 50%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'fraction/input.scss',
    data: '@use "sass:color";\na {b: color.saturation(hsl(0, 0.5%, 50%))}\n',
  },
  {
    name: 'fraction/output.css',
    data: 'a {\n  b: 0.5%;\n}\n',
  },
  {
    name: 'fraction/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.saturation() is deprecated. Suggestion:\n\ncolor.channel($color, "saturation", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.saturation(hsl(0, 0.5%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.saturation($color: hsl(0, 42%, 50%))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 42%;\n}\n',
  },
  {
    name: 'named/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.saturation() is deprecated. Suggestion:\n\ncolor.channel($color, "saturation", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.saturation($color: hsl(0, 42%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.saturation()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.saturation()}\n  |       ^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function saturation($color) {\n  |           ================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.saturation(red, green)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: color.saturation(red, green)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function saturation($color) {\n  |           ================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.saturation(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.saturation(1)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.saturation(color(srgb 1 1 1))}\n',
  },
  {
    name: 'error/non_legacy/error',
    data: "Error: color.saturation() is only supported for legacy colors. Please use color.channel() instead with an explicit $space argument.\n  ,\n2 | a {b: color.saturation(color(srgb 1 1 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
