export default [
  {
    name: 'max/input.scss',
    data: '@use "sass:color";\na {b: color.hue(hsl(359, 50%, 50%))}\n',
  },
  {
    name: 'max/output.css',
    data: 'a {\n  b: 359deg;\n}\n',
  },
  {
    name: 'max/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.hue(hsl(359, 50%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'above_max/input.scss',
    data: '@use "sass:color";\na {b: color.hue(hsl(540, 50%, 50%))}\n',
  },
  {
    name: 'above_max/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'above_max/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.hue(hsl(540, 50%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'min/input.scss',
    data: '@use "sass:color";\na {b: color.hue(hsl(0, 50%, 50%))}\n',
  },
  {
    name: 'min/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'min/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.hue(hsl(0, 50%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'negative/input.scss',
    data: '@use "sass:color";\na {b: color.hue(hsl(-180, 50%, 50%))}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'negative/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.hue(hsl(-180, 50%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.hue(hsl(123, 50%, 50%))}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: 123deg;\n}\n',
  },
  {
    name: 'middle/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.hue(hsl(123, 50%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'fraction/input.scss',
    data: '@use "sass:color";\na {b: color.hue(hsl(0.5, 50%, 50%))}\n',
  },
  {
    name: 'fraction/output.css',
    data: 'a {\n  b: 0.5deg;\n}\n',
  },
  {
    name: 'fraction/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.hue(hsl(0.5, 50%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.hue($color: hsl(234, 50%, 50%))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 234deg;\n}\n',
  },
  {
    name: 'named/warning',
    data: 'DEPRECATION WARNING [color-functions]: color.hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.hue($color: hsl(234, 50%, 50%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.hue()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.hue()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function hue($color) {\n  |           =========== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.hue(red, green)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: color.hue(red, green)}\n  |       ^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function hue($color) {\n  |           =========== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.hue(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.hue(1)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.hue(lch(0% 0 0deg))}\n',
  },
  {
    name: 'error/non_legacy/error',
    data: "Error: color.hue() is only supported for legacy colors. Please use color.channel() instead with an explicit $space argument.\n  ,\n2 | a {b: color.hue(lch(0% 0 0deg))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
