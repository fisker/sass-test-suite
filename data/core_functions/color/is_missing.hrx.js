export default [
  {
    name: 'false/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(#abcdef, "red")}\n',
  },
  {
    name: 'false/explicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/not_powerless/converted/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(color.to-space(#aaaaab, lch), "hue")}\n',
  },
  {
    name: 'false/not_powerless/converted/non_legacy/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/not_powerless/converted/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(color.to-space(#aaaaab, hsl), "hue")}\n',
  },
  {
    name: 'false/not_powerless/converted/legacy/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/not_powerless/direct/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(lch(50% 1% 0deg), "hue")}\n',
  },
  {
    name: 'false/not_powerless/direct/non_legacy/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/not_powerless/direct/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(hsl(0deg 50% 1%), "hue")}\n',
  },
  {
    name: 'false/not_powerless/direct/legacy/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/powerless/direct/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(lch(50% 0% 0deg), "hue")}\n',
  },
  {
    name: 'false/powerless/direct/non_legacy/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/powerless/direct/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(hsl(0deg 50% 0%), "hue")}\n',
  },
  {
    name: 'false/powerless/direct/legacy/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/powerless/converted/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(color.to-space(#aaaaaa, hsl), "hue")}\n',
  },
  {
    name: 'false/powerless/converted/legacy/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'true/explicit/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(lab(50% 30 none), "b")}\n',
  },
  {
    name: 'true/explicit/non_legacy/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/explicit/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(rgb(none 30 100), "red")}\n',
  },
  {
    name: 'true/explicit/legacy/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/powerless/converted/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(color.to-space(#aaaaaa, lch), "hue")}\n',
  },
  {
    name: 'true/powerless/converted/non_legacy/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing($color: black, $channel: "red")}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(black)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $channel.\n  ,--> input.scss\n2 | a {b: color.is-missing(black)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function is-missing($color, $channel) {\n  |           ============================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(black, "red", rgb)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: color.is-missing(black, "red", rgb)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:color\n1 | @function is-missing($color, $channel) {\n  |           ============================ declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/color/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing("black", "red")}\n',
  },
  {
    name: 'error/type/color/error',
    data: 'Error: $color: "black" is not a color.\n  ,\n2 | a {b: color.is-missing("black", "red")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/channel/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(black, red)}\n',
  },
  {
    name: 'error/type/channel/error',
    data: "Error: $channel: red is not a string.\n  ,\n2 | a {b: color.is-missing(black, red)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/channel/wrong_space/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(black, "hue")}\n',
  },
  {
    name: 'error/channel/wrong_space/error',
    data: 'Error: $channel: Color black doesn\'t have a channel named "hue".\n  ,\n2 | a {b: color.is-missing(black, "hue")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/channel/unquoted/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(hsl(0deg 50% 50%), hue)}\n',
  },
  {
    name: 'error/channel/unquoted/error',
    data: "Error: $channel: Expected hue to be a quoted string.\n  ,\n2 | a {b: color.is-missing(hsl(0deg 50% 50%), hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/channel/wrong_case/input.scss',
    data: '@use "sass:color";\na {b: color.is-missing(black, "RED")}\n',
  },
  {
    name: 'error/channel/wrong_case/error',
    data: 'Error: $channel: Color black doesn\'t have a channel named "RED".\n  ,\n2 | a {b: color.is-missing(black, "RED")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
