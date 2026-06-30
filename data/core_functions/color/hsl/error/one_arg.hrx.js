export default [
  {
    name: 'list/empty/input.scss',
    data: 'a {\n  b: hsl(());\n}\n',
  },
  {
    name: 'list/empty/error',
    data: "Error: $channels: Color component list may not be empty.\n  ,\n2 |   b: hsl(());\n  |      ^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/comma_separated/input.scss',
    data: 'a {\n  b: hsl((0, 100%, 50%));\n}\n',
  },
  {
    name: 'list/comma_separated/error',
    data: "Error: $channels: Expected a space- or slash-separated list, was (0, 100%, 50%)\n  ,\n2 |   b: hsl((0, 100%, 50%));\n  |      ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/bracketed/input.scss',
    data: 'a {\n  b: hsl([0 100% 50%]);\n}\n',
  },
  {
    name: 'list/bracketed/error',
    data: "Error: $channels: Expected an unbracketed list, was [0 100% 50%]\n  ,\n2 |   b: hsl([0 100% 50%]);\n  |      ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/one_element/input.scss',
    data: 'a {\n  b: hsl(0);\n}\n',
  },
  {
    name: 'list/one_element/error',
    data: "Error: $channels: The hsl color space has 3 channels but 0 has 1.\n  ,\n2 |   b: hsl(0);\n  |      ^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/two_elements/input.scss',
    data: 'a {\n  b: hsl(0 100%);\n}\n',
  },
  {
    name: 'list/two_elements/error',
    data: "Error: $channels: The hsl color space has 3 channels but (0 100%) has 2.\n  ,\n2 |   b: hsl(0 100%);\n  |      ^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/four_elements/input.scss',
    data: 'a {\n  b: hsl(0 100% 50% 0.4);\n}\n',
  },
  {
    name: 'list/four_elements/error',
    data: "Error: $channels: The hsl color space has 3 channels but (0 100% 50% 0.4) has 4.\n  ,\n2 |   b: hsl(0 100% 50% 0.4);\n  |      ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'type/hue/input.scss',
    data: 'a {\n  b: hsl("foo" 100% 50%);\n}\n',
  },
  {
    name: 'type/hue/error',
    data: 'Error: $channels: Expected hue channel to be a number, was "foo".\n  ,\n2 |   b: hsl("foo" 100% 50%);\n  |      ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'type/saturation/input.scss',
    data: 'a {\n  b: hsl(0 "foo" 50%);\n}\n',
  },
  {
    name: 'type/saturation/error',
    data: 'Error: $channels: Expected saturation channel to be a number, was "foo".\n  ,\n2 |   b: hsl(0 "foo" 50%);\n  |      ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'type/lightness/input.scss',
    data: 'a {\n  b: hsl(0 100% "foo");\n}\n',
  },
  {
    name: 'type/lightness/error',
    data: 'Error: $channels: Expected lightness channel to be a number, was "foo".\n  ,\n2 |   b: hsl(0 100% "foo");\n  |      ^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'quoted_var_slash/input.scss',
    data: 'a {\n  b: hsl(0 100% "var(--foo) / 0.4");\n}\n',
  },
  {
    name: 'quoted_var_slash/error',
    data: 'Error: $channels: Expected lightness channel to be a number, was "var(--foo) / 0.4".\n  ,\n2 |   b: hsl(0 100% "var(--foo) / 0.4");\n  |      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'slash_list/too_few_elements/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.append((), 0 100% 100%, $separator: slash))}\n',
  },
  {
    name: 'slash_list/too_few_elements/error',
    data: "Error: $channels: Only 2 slash-separated elements allowed, but 1 was passed.\n  ,\n2 | a {b: hsl(list.append((), 0 100% 100%, $separator: slash))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/too_many_elements/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(0 100% 100%, 0.4, 1))}\n',
  },
  {
    name: 'slash_list/too_many_elements/error',
    data: "Error: $channels: Only 2 slash-separated elements allowed, but 3 were passed.\n  ,\n2 | a {b: hsl(list.slash(0 100% 100%, 0.4, 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/empty/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash((), 1))}\n',
  },
  {
    name: 'slash_list/channels/empty/error',
    data: "Error: $channels: Color component list may not be empty.\n  ,\n2 | a {b: hsl(list.slash((), 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/comma_separated/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash((0, 100%, 50%), 1))}\n',
  },
  {
    name: 'slash_list/channels/comma_separated/error',
    data: "Error: $channels: Expected a space-separated list, was (0, 100%, 50%)\n  ,\n2 | a {b: hsl(list.slash((0, 100%, 50%), 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/bracketed/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash([0 100% 50%], 1))}\n',
  },
  {
    name: 'slash_list/channels/bracketed/error',
    data: "Error: $channels: Expected an unbracketed list, was [0 100% 50%]\n  ,\n2 | a {b: hsl(list.slash([0 100% 50%], 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/one_element/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(0, 1))}\n',
  },
  {
    name: 'slash_list/channels/one_element/error',
    data: "Error: $channels: The hsl color space has 3 channels but (0 / 1) has 1.\n  ,\n2 | a {b: hsl(list.slash(0, 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/two_elements/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(0 100%, 1))}\n',
  },
  {
    name: 'slash_list/channels/two_elements/error',
    data: "Error: $channels: The hsl color space has 3 channels but (0 100% / 1) has 2.\n  ,\n2 | a {b: hsl(list.slash(0 100%, 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/four_elements/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(0 100% 50% 0.4, 1))}\n',
  },
  {
    name: 'slash_list/channels/four_elements/error',
    data: "Error: $channels: The hsl color space has 3 channels but (0 100% 50% 0.4 / 1) has 4.\n  ,\n2 | a {b: hsl(list.slash(0 100% 50% 0.4, 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
