export default [
  {
    name: 'unit/lightness/input.scss',
    data: 'a {b: oklab(1px 2 3)}\n',
  },
  {
    name: 'unit/lightness/error',
    data: 'Error: $lightness: Expected 1px to have unit "%" or no units.\n  ,\n1 | a {b: oklab(1px 2 3)}\n  |       ^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unit/a/input.scss',
    data: 'a {b: oklab(1% 2px 3)}\n',
  },
  {
    name: 'unit/a/error',
    data: 'Error: $a: Expected 2px to have unit "%" or no units.\n  ,\n1 | a {b: oklab(1% 2px 3)}\n  |       ^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unit/b/input.scss',
    data: 'a {b: oklab(1% 2 3px)}\n',
  },
  {
    name: 'unit/b/error',
    data: 'Error: $b: Expected 3px to have unit "%" or no units.\n  ,\n1 | a {b: oklab(1% 2 3px)}\n  |       ^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unit/alpha/slash/input.scss',
    data: 'a {b: oklab(1% 2 3/0.4px)}\n',
  },
  {
    name: 'unit/alpha/slash/error',
    data: 'Error: $alpha: Expected 0.4px to have unit "%" or no units.\n  ,\n1 | a {b: oklab(1% 2 3/0.4px)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unit/alpha/slash_list/input.scss',
    data: "@use 'sass:list';\na {b: oklab(list.slash(1% 2 3, 0.4px))}\n",
  },
  {
    name: 'unit/alpha/slash_list/error',
    data: 'Error: $alpha: Expected 0.4px to have unit "%" or no units.\n  ,\n2 | a {b: oklab(list.slash(1% 2 3, 0.4px))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'type/lightness/input.scss',
    data: 'a {b: oklab(c 2 3)}\n',
  },
  {
    name: 'type/lightness/error',
    data: "Error: $channels: Expected lightness channel to be a number, was c.\n  ,\n1 | a {b: oklab(c 2 3)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/a/input.scss',
    data: 'a {b: oklab(1% c 3)}\n',
  },
  {
    name: 'type/a/error',
    data: "Error: $channels: Expected a channel to be a number, was c.\n  ,\n1 | a {b: oklab(1% c 3)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/b/input.scss',
    data: 'a {b: oklab(1% 2 c)}\n',
  },
  {
    name: 'type/b/error',
    data: "Error: $channels: Expected b channel to be a number, was c.\n  ,\n1 | a {b: oklab(1% 2 c)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/alpha/slash_list/input.scss',
    data: "@use 'sass:list';\na {b: oklab(list.slash(1% 2 3, c))}\n",
  },
  {
    name: 'type/alpha/slash_list/error',
    data: "Error: $channels: c is not a number.\n  ,\n2 | a {b: oklab(list.slash(1% 2 3, c))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/bracketed/input.scss',
    data: 'a {b: oklab([1% 2 3])}\n',
  },
  {
    name: 'list/bracketed/error',
    data: "Error: $channels: Expected an unbracketed list, was [1% 2 3]\n  ,\n1 | a {b: oklab([1% 2 3])}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list/comma/input.scss',
    data: 'a {b: oklab((1%, 2, 3))}\n',
  },
  {
    name: 'list/comma/error',
    data: "Error: $channels: Expected a space- or slash-separated list, was (1%, 2, 3)\n  ,\n1 | a {b: oklab((1%, 2, 3))}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list/slash/three/input.scss',
    data: "@use 'sass:list';\na {b: oklab(list.slash(1%, 2, 3))}\n",
  },
  {
    name: 'list/slash/three/error',
    data: "Error: $channels: Only 2 slash-separated elements allowed, but 3 were passed.\n  ,\n2 | a {b: oklab(list.slash(1%, 2, 3))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/slash/one/input.scss',
    data: "@use 'sass:list';\n$single-arg-slash-separated: list.append((), 1% 2 3, $separator: slash);\na {b: oklab($single-arg-slash-separated)}\n",
  },
  {
    name: 'list/slash/one/error',
    data: "Error: $channels: Only 2 slash-separated elements allowed, but 1 was passed.\n  ,\n3 | a {b: oklab($single-arg-slash-separated)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'list/empty/input.scss',
    data: 'a {b: oklab(())}\n',
  },
  {
    name: 'list/empty/error',
    data: "Error: $channels: Color component list may not be empty.\n  ,\n1 | a {b: oklab(())}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list/empty_space/input.scss',
    data: "@use 'sass:list';\n$empty-space: list.join((), (), $separator: space);\na {b: oklab(())}\n",
  },
  {
    name: 'list/empty_space/error',
    data: "Error: $channels: Color component list may not be empty.\n  ,\n3 | a {b: oklab(())}\n  |       ^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'list/too_few_channels/input.scss',
    data: 'a {b: oklab(1% 2)}\n',
  },
  {
    name: 'list/too_few_channels/error',
    data: "Error: $channels: The oklab color space has 3 channels but (1% 2) has 2.\n  ,\n1 | a {b: oklab(1% 2)}\n  |       ^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list/too_many_channels/input.scss',
    data: 'a {b: oklab(1% 2 3 0.4)}\n',
  },
  {
    name: 'list/too_many_channels/error',
    data: "Error: $channels: The oklab color space has 3 channels but (1% 2 3 0.4) has 4.\n  ,\n1 | a {b: oklab(1% 2 3 0.4)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_few_args/input.scss',
    data: 'a {b: oklab()}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $channels.\n  ,--> input.scss\n1 | a {b: oklab()}\n  |       ^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function oklab($channels) {\n  |           ================ declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: 'a {b: oklab(1%, 2, 3, 0.4)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 1 argument allowed, but 4 were passed.\n  ,--> input.scss\n1 | a {b: oklab(1%, 2, 3, 0.4)}\n  |       ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function oklab($channels) {\n  |           ================ declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
