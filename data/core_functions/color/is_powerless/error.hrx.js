export default [
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black)}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $channel.\n  ,--> input.scss\n2 | a {b: color.is-powerless(black)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function is-powerless($color, $channel, $space: null) {\n  |           ============================================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black, "red", rgb, c)}\n',
  },
  {
    name: 'too_many_args/error',
    data: 'Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: color.is-powerless(black, "red", rgb, c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:color\n1 | @function is-powerless($color, $channel, $space: null) {\n  |           ============================================ declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'type/color/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(c, "red")}\n',
  },
  {
    name: 'type/color/error',
    data: 'Error: $color: c is not a color.\n  ,\n2 | a {b: color.is-powerless(c, "red")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'type/channel/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black, 1)}\n',
  },
  {
    name: 'type/channel/error',
    data: "Error: $channel: 1 is not a string.\n  ,\n2 | a {b: color.is-powerless(black, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'type/space/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black, "red", $space: 1)}\n',
  },
  {
    name: 'type/space/error',
    data: 'Error: $space: 1 is not a string.\n  ,\n2 | a {b: color.is-powerless(black, "red", $space: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'channel/unquoted/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hsl(0deg 0% 0%), hue)}\n',
  },
  {
    name: 'channel/unquoted/error',
    data: "Error: $channel: Expected hue to be a quoted string.\n  ,\n2 | a {b: color.is-powerless(hsl(0deg 0% 0%), hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'channel/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black, "c")}\n',
  },
  {
    name: 'channel/unknown/error',
    data: 'Error: $channel: Color black doesn\'t have a channel named "c".\n  ,\n2 | a {b: color.is-powerless(black, "c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'channel/wrong_space/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black, "hue")}\n',
  },
  {
    name: 'channel/wrong_space/error',
    data: 'Error: $channel: Color black doesn\'t have a channel named "hue".\n  ,\n2 | a {b: color.is-powerless(black, "hue")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'channel/wrong_case/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black, "RED")}\n',
  },
  {
    name: 'channel/wrong_case/error',
    data: 'Error: $channel: Color black doesn\'t have a channel named "RED".\n  ,\n2 | a {b: color.is-powerless(black, "RED")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'space/quoted/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black, "red", $space: "rgb")}\n',
  },
  {
    name: 'space/quoted/error',
    data: 'Error: $space: Expected "rgb" to be an unquoted string.\n  ,\n2 | a {b: color.is-powerless(black, "red", $space: "rgb")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'space/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(black, "red", $space: c)}\n',
  },
  {
    name: 'space/unknown/error',
    data: 'Error: $space: Unknown color space "c".\n  ,\n2 | a {b: color.is-powerless(black, "red", $space: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
