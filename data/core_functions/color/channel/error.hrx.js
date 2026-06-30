// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/error.hrx

export default [
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink)}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $channel.\n  ,--> input.scss\n2 | a {b: color.channel(pink)}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function channel($color, $channel, $space: null) {\n  |           ======================================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "red", rgb, "red")}\n',
  },
  {
    name: 'too_many_args/error',
    data: 'Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: color.channel(pink, "red", rgb, "red")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:color\n1 | @function channel($color, $channel, $space: null) {\n  |           ======================================= declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'type/color/input.scss',
    data: '@use "sass:color";\na {b: color.channel("pink", "red")}\n',
  },
  {
    name: 'type/color/error',
    data: 'Error: $color: "pink" is not a color.\n  ,\n2 | a {b: color.channel("pink", "red")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'type/channel/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, red)}\n',
  },
  {
    name: 'type/channel/error',
    data: "Error: $channel: red is not a string.\n  ,\n2 | a {b: color.channel(pink, red)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'type/space/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "red", red)}\n',
  },
  {
    name: 'type/space/error',
    data: 'Error: $space: red is not a string.\n  ,\n2 | a {b: color.channel(pink, "red", red)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'channel/unquoted/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hsl(50deg 50% 50%), hue)}\n',
  },
  {
    name: 'channel/unquoted/error',
    data: "Error: $channel: Expected hue to be a quoted string.\n  ,\n2 | a {b: color.channel(hsl(50deg 50% 50%), hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'channel/wrong_space/input.scss',
    data: '@use "sass:color";\na {b: color.channel(red, "hue")}\n',
  },
  {
    name: 'channel/wrong_space/error',
    data: 'Error: $channel: Color red has no channel named hue.\n  ,\n2 | a {b: color.channel(red, "hue")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'channel/wrong_case/input.scss',
    data: '@use "sass:color";\na {b: color.channel(red, "RED")}\n',
  },
  {
    name: 'channel/wrong_case/error',
    data: 'Error: $channel: Color red has no channel named RED.\n  ,\n2 | a {b: color.channel(red, "RED")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'channel/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.channel(red, "foo")}\n',
  },
  {
    name: 'channel/unknown/error',
    data: 'Error: $channel: Color red has no channel named foo.\n  ,\n2 | a {b: color.channel(red, "foo")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'space/quoted/input.scss',
    data: '@use "sass:color";\na {b: color.channel(red, "hue", $space: "hsl")}\n',
  },
  {
    name: 'space/quoted/error',
    data: 'Error: $space: Expected "hsl" to be an unquoted string.\n  ,\n2 | a {b: color.channel(red, "hue", $space: "hsl")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'space/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.channel(red, "hue", $space: "foo")}\n',
  },
  {
    name: 'space/unknown/error',
    data: 'Error: $space: Expected "foo" to be an unquoted string.\n  ,\n2 | a {b: color.channel(red, "hue", $space: "foo")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
