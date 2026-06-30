// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/lightness.hrx

export default [
  {
    name: 'max/input.scss',
    data: '@use "sass:color";\na {b: color.lightness(hsl(0, 100%, 100%))}\n',
  },
  {
    name: 'max/output.css',
    data: 'a {\n  b: 100%;\n}\n',
  },
  {
    name: 'max/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.lightness() is deprecated. Suggestion:\n\ncolor.channel($color, "lightness", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.lightness(hsl(0, 100%, 100%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'min/input.scss',
    data: '@use "sass:color";\na {b: color.lightness(hsl(0, 100%, 0%))}\n',
  },
  {
    name: 'min/output.css',
    data: 'a {\n  b: 0%;\n}\n',
  },
  {
    name: 'min/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.lightness() is deprecated. Suggestion:\n\ncolor.channel($color, "lightness", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.lightness(hsl(0, 100%, 0%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.lightness(hsl(0, 100%, 50%))}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: 50%;\n}\n',
  },
  {
    name: 'middle/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.lightness() is deprecated. Suggestion:\n\ncolor.channel($color, "lightness", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.lightness(hsl(0, 100%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'fraction/input.scss',
    data: '@use "sass:color";\na {b: color.lightness(hsl(0, 100%, 0.5%))}\n',
  },
  {
    name: 'fraction/output.css',
    data: 'a {\n  b: 0.5%;\n}\n',
  },
  {
    name: 'fraction/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.lightness() is deprecated. Suggestion:\n\ncolor.channel($color, "lightness", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.lightness(hsl(0, 100%, 0.5%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.lightness($color: hsl(0, 100%, 42%))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 42%;\n}\n',
  },
  {
    name: 'named/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.lightness() is deprecated. Suggestion:\n\ncolor.channel($color, "lightness", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.lightness($color: hsl(0, 100%, 42%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.lightness()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.lightness()}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function lightness($color) {\n  |           ================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.lightness(red, green)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: color.lightness(red, green)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function lightness($color) {\n  |           ================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.lightness(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.lightness(1)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.lightness(lch(0% 0 0deg))}\n',
  },
  {
    name: 'error/non_legacy/error',
    data: "Error: color.lightness() is only supported for legacy colors. Please use color.channel() instead with an explicit $space argument.\n  ,\n2 | a {b: color.lightness(lch(0% 0 0deg))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
