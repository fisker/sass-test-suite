export default [
  {
    name: 'unit/red/input.scss',
    data: 'a {b: color(srgb 0.1px 0.2 0.3)}\n',
  },
  {
    name: 'unit/red/error',
    data: 'Error: $red: Expected 0.1px to have unit "%" or no units.\n  ,\n1 | a {b: color(srgb 0.1px 0.2 0.3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unit/green/input.scss',
    data: 'a {b: color(srgb 0.1 0.2px 0.3)}\n',
  },
  {
    name: 'unit/green/error',
    data: 'Error: $green: Expected 0.2px to have unit "%" or no units.\n  ,\n1 | a {b: color(srgb 0.1 0.2px 0.3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unit/blue/input.scss',
    data: 'a {b: color(srgb 0.1 0.2 0.3px)}\n',
  },
  {
    name: 'unit/blue/error',
    data: 'Error: $blue: Expected 0.3px to have unit "%" or no units.\n  ,\n1 | a {b: color(srgb 0.1 0.2 0.3px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unit/alpha/slash/input.scss',
    data: 'a {b: color(srgb 0.1 0.2 0.3/0.4px)}\n',
  },
  {
    name: 'unit/alpha/slash/error',
    data: 'Error: $alpha: Expected 0.4px to have unit "%" or no units.\n  ,\n1 | a {b: color(srgb 0.1 0.2 0.3/0.4px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unit/alpha/slash_list/input.scss',
    data: "@use 'sass:list';\na {b: color(list.slash(srgb 0.1 0.2 0.3, 0.4px))}\n",
  },
  {
    name: 'unit/alpha/slash_list/error',
    data: 'Error: $alpha: Expected 0.4px to have unit "%" or no units.\n  ,\n2 | a {b: color(list.slash(srgb 0.1 0.2 0.3, 0.4px))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'type/red/input.scss',
    data: 'a {b: color(srgb c 0.2 0.3)}\n',
  },
  {
    name: 'type/red/error',
    data: "Error: $description: Expected red channel to be a number, was c.\n  ,\n1 | a {b: color(srgb c 0.2 0.3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/green/input.scss',
    data: 'a {b: color(srgb 0.1 c 0.3)}\n',
  },
  {
    name: 'type/green/error',
    data: "Error: $description: Expected green channel to be a number, was c.\n  ,\n1 | a {b: color(srgb 0.1 c 0.3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/blue/input.scss',
    data: 'a {b: color(srgb 0.1 0.2 c)}\n',
  },
  {
    name: 'type/blue/error',
    data: "Error: $description: Expected blue channel to be a number, was c.\n  ,\n1 | a {b: color(srgb 0.1 0.2 c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/alpha/slash_list/input.scss',
    data: "@use 'sass:list';\na {b: color(list.slash(srgb 0.1 0.2 0.3, c))}\n",
  },
  {
    name: 'type/alpha/slash_list/error',
    data: "Error: $description: c is not a number.\n  ,\n2 | a {b: color(list.slash(srgb 0.1 0.2 0.3, c))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/bracketed/input.scss',
    data: 'a {b: color([srgb 0.1 0.2 0.3])}\n',
  },
  {
    name: 'list/bracketed/error',
    data: "Error: $description: Expected an unbracketed list, was [srgb 0.1 0.2 0.3]\n  ,\n1 | a {b: color([srgb 0.1 0.2 0.3])}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list/comma/input.scss',
    data: 'a {b: color((srgb, 0.1, 0.2, 0.3))}\n',
  },
  {
    name: 'list/comma/error',
    data: "Error: $description: Expected a space- or slash-separated list, was (srgb, 0.1, 0.2, 0.3)\n  ,\n1 | a {b: color((srgb, 0.1, 0.2, 0.3))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list/slash/three/input.scss',
    data: "@use 'sass:list';\na {b: color(list.slash(srgb 0.1, 0.2, 0.3))}\n",
  },
  {
    name: 'list/slash/three/error',
    data: "Error: $description: Only 2 slash-separated elements allowed, but 3 were passed.\n  ,\n2 | a {b: color(list.slash(srgb 0.1, 0.2, 0.3))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/slash/one/input.scss',
    data: "@use 'sass:list';\n$single-arg-slash-separated: list.append((), srgb 0.1 0.2 0.3, $separator: slash);\na {b: color($single-arg-slash-separated)}\n",
  },
  {
    name: 'list/slash/one/error',
    data: "Error: $description: Only 2 slash-separated elements allowed, but 1 was passed.\n  ,\n3 | a {b: color($single-arg-slash-separated)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'list/after_space/input.scss',
    data: 'a {b: color(srgb (0.1 0.2 0.3))}\n',
  },
  {
    name: 'list/after_space/error',
    data: "Error: $description: Expected red channel to be a number, was (0.1 0.2 0.3).\n  ,\n1 | a {b: color(srgb (0.1 0.2 0.3))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list/too_few_channels/input.scss',
    data: 'a {b: color(srgb 0.1 0.2)}\n',
  },
  {
    name: 'list/too_few_channels/error',
    data: "Error: $description: The srgb color space has 3 channels but (srgb 0.1 0.2) has 2.\n  ,\n1 | a {b: color(srgb 0.1 0.2)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list/too_many_channels/input.scss',
    data: 'a {b: color(srgb 0.1 0.2 0.3 0.4)}\n',
  },
  {
    name: 'list/too_many_channels/error',
    data: "Error: $description: The srgb color space has 3 channels but (srgb 0.1 0.2 0.3 0.4) has 4.\n  ,\n1 | a {b: color(srgb 0.1 0.2 0.3 0.4)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_few_args/no_channels/input.scss',
    data: 'a {b: color(srgb)}\n',
  },
  {
    name: 'too_few_args/no_channels/error',
    data: "Error: $description: The srgb color space has 3 channels but srgb has 0.\n  ,\n1 | a {b: color(srgb)}\n  |       ^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_few_args/no_space/input.scss',
    data: 'a {b: color(1 2 3)}\n',
  },
  {
    name: 'too_few_args/no_space/error',
    data: "Error: $description: 1 is not a string.\n  ,\n1 | a {b: color(1 2 3)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_few_args/none/input.scss',
    data: 'a {b: color()}\n',
  },
  {
    name: 'too_few_args/none/error',
    data: "Error: Missing argument $description.\n  ,--> input.scss\n1 | a {b: color()}\n  |       ^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function color($description) {\n  |           =================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: 'a {b: color(srgb 0.1 0.2 0.3 0.4)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: $description: The srgb color space has 3 channels but (srgb 0.1 0.2 0.3 0.4) has 4.\n  ,\n1 | a {b: color(srgb 0.1 0.2 0.3 0.4)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'unknown_space/input.scss',
    data: 'a {b: color(foo 1 2 3)}\n',
  },
  {
    name: 'unknown_space/error',
    data: 'Error: $description: Unknown color space "foo".\n  ,\n1 | a {b: color(foo 1 2 3)}\n  |       ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'relative_color/quoted/alpha/input.scss',
    data: 'a {b: color("from" #aaa srgb r g b / 25%)}\n',
  },
  {
    name: 'relative_color/quoted/alpha/error',
    data: 'Error: $description: Expected "from" to be an unquoted string.\n  ,\n1 | a {b: color("from" #aaa srgb r g b / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'relative_color/quoted/no_alpha/input.scss',
    data: 'a {b: color("from" #aaa srgb r g b)}\n',
  },
  {
    name: 'relative_color/quoted/no_alpha/error',
    data: 'Error: $description: Expected "from" to be an unquoted string.\n  ,\n1 | a {b: color("from" #aaa srgb r g b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'relative_color/wrong_keyword/alpha/input.scss',
    data: 'a {b: color(c #aaa srgb r g b / 25%)}\n',
  },
  {
    name: 'relative_color/wrong_keyword/alpha/error',
    data: 'Error: $description: Unknown color space "c".\n  ,\n1 | a {b: color(c #aaa srgb r g b / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'relative_color/wrong_keyword/no_alpha/input.scss',
    data: 'a {b: color(c #aaa srgb r g b)}\n',
  },
  {
    name: 'relative_color/wrong_keyword/no_alpha/error',
    data: 'Error: $description: Unknown color space "c".\n  ,\n1 | a {b: color(c #aaa srgb r g b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
]
