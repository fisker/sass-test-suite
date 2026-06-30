export default [
  {
    name: 'list/empty/input.scss',
    data: 'a {\n  b: rgb(());\n}\n',
  },
  {
    name: 'list/empty/error',
    data: "Error: $channels: Color component list may not be empty.\n  ,\n2 |   b: rgb(());\n  |      ^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/one_element/input.scss',
    data: 'a {\n  b: rgb(1);\n}\n',
  },
  {
    name: 'list/one_element/error',
    data: "Error: $channels: The rgb color space has 3 channels but 1 has 1.\n  ,\n2 |   b: rgb(1);\n  |      ^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/two_elements/input.scss',
    data: 'a {\n  b: rgb(1 2);\n}\n',
  },
  {
    name: 'list/two_elements/error',
    data: "Error: $channels: The rgb color space has 3 channels but (1 2) has 2.\n  ,\n2 |   b: rgb(1 2);\n  |      ^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/four_elements/input.scss',
    data: 'a {\n  b: rgb(1 2 3 0.4);\n}\n',
  },
  {
    name: 'list/four_elements/error',
    data: "Error: $channels: The rgb color space has 3 channels but (1 2 3 0.4) has 4.\n  ,\n2 |   b: rgb(1 2 3 0.4);\n  |      ^^^^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/comma_separated/input.scss',
    data: 'a {\n  b: rgb((1, 2, 3));\n}\n',
  },
  {
    name: 'list/comma_separated/error',
    data: "Error: $channels: Expected a space- or slash-separated list, was (1, 2, 3)\n  ,\n2 |   b: rgb((1, 2, 3));\n  |      ^^^^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'list/bracketed/input.scss',
    data: 'a {\n  b: rgb([1 2 3]);\n}\n',
  },
  {
    name: 'list/bracketed/error',
    data: "Error: $channels: Expected an unbracketed list, was [1 2 3]\n  ,\n2 |   b: rgb([1 2 3]);\n  |      ^^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'type/red/input.scss',
    data: 'a {\n  b: rgb("foo" 2 3);\n}\n',
  },
  {
    name: 'type/red/error',
    data: 'Error: $channels: Expected red channel to be a number, was "foo".\n  ,\n2 |   b: rgb("foo" 2 3);\n  |      ^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'type/green/input.scss',
    data: 'a {\n  b: rgb(1 "foo" 3);\n}\n',
  },
  {
    name: 'type/green/error',
    data: 'Error: $channels: Expected green channel to be a number, was "foo".\n  ,\n2 |   b: rgb(1 "foo" 3);\n  |      ^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'type/blue/input.scss',
    data: 'a {\n  b: rgb(1 2 "foo");\n}\n',
  },
  {
    name: 'type/blue/error',
    data: 'Error: $channels: Expected blue channel to be a number, was "foo".\n  ,\n2 |   b: rgb(1 2 "foo");\n  |      ^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'quoted_var_slash/input.scss',
    data: 'a {\n  b: rgb(1 2 "var(--foo) / 0.4");\n}\n',
  },
  {
    name: 'quoted_var_slash/error',
    data: 'Error: $channels: Expected blue channel to be a number, was "var(--foo) / 0.4".\n  ,\n2 |   b: rgb(1 2 "var(--foo) / 0.4");\n  |      ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'slash_list/too_few_elements/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.append((), 1 2 3, $separator: slash))}\n',
  },
  {
    name: 'slash_list/too_few_elements/error',
    data: "Error: $channels: Only 2 slash-separated elements allowed, but 1 was passed.\n  ,\n2 | a {b: rgb(list.append((), 1 2 3, $separator: slash))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/too_many_elements/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(1 2 3, 0.4, 1))}\n',
  },
  {
    name: 'slash_list/too_many_elements/error',
    data: "Error: $channels: Only 2 slash-separated elements allowed, but 3 were passed.\n  ,\n2 | a {b: rgb(list.slash(1 2 3, 0.4, 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/empty/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash((), 1))}\n',
  },
  {
    name: 'slash_list/channels/empty/error',
    data: "Error: $channels: Color component list may not be empty.\n  ,\n2 | a {b: rgb(list.slash((), 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/comma_separated/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash((1, 2, 3), 1))}\n',
  },
  {
    name: 'slash_list/channels/comma_separated/error',
    data: "Error: $channels: Expected a space-separated list, was (1, 2, 3)\n  ,\n2 | a {b: rgb(list.slash((1, 2, 3), 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/bracketed/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash([1 2 3], 1))}\n',
  },
  {
    name: 'slash_list/channels/bracketed/error',
    data: "Error: $channels: Expected an unbracketed list, was [1 2 3]\n  ,\n2 | a {b: rgb(list.slash([1 2 3], 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/one_element/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(1, 1))}\n',
  },
  {
    name: 'slash_list/channels/one_element/error',
    data: "Error: $channels: The rgb color space has 3 channels but (1 / 1) has 1.\n  ,\n2 | a {b: rgb(list.slash(1, 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/two_elements/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(1 2, 1))}\n',
  },
  {
    name: 'slash_list/channels/two_elements/error',
    data: "Error: $channels: The rgb color space has 3 channels but (1 2 / 1) has 2.\n  ,\n2 | a {b: rgb(list.slash(1 2, 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'slash_list/channels/four_elements/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(1 2 3 0.4, 1))}\n',
  },
  {
    name: 'slash_list/channels/four_elements/error',
    data: "Error: $channels: The rgb color space has 3 channels but (1 2 3 0.4 / 1) has 4.\n  ,\n2 | a {b: rgb(list.slash(1 2 3 0.4, 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
