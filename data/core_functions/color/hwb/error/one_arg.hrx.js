// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hwb/error/one_arg.hrx

export default [
  {
    name: 'list/empty/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(())}\n',
  },
  {
    name: 'list/empty/error',
    data: "Error: $channels: Color component list may not be empty.\n  ,\n2 | a {b: color.hwb(())}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/comma_separated/input.scss',
    data: '@use "sass:color";\na {b: color.hwb((0, 30%, 40%))}\n',
  },
  {
    name: 'list/comma_separated/error',
    data: "Error: $channels: Expected a space- or slash-separated list, was (0, 30%, 40%)\n  ,\n2 | a {b: color.hwb((0, 30%, 40%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/bracketed/input.scss',
    data: '@use "sass:color";\na {b: color.hwb([0 30% 40%])}\n',
  },
  {
    name: 'list/bracketed/error',
    data: "Error: $channels: Expected an unbracketed list, was [0 30% 40%]\n  ,\n2 | a {b: color.hwb([0 30% 40%])}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/one_element/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0)}\n',
  },
  {
    name: 'list/one_element/error',
    data: "Error: $channels: The hwb color space has 3 channels but 0 has 1.\n  ,\n2 | a {b: color.hwb(0)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/two_elements/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30%)}\n',
  },
  {
    name: 'list/two_elements/error',
    data: "Error: $channels: The hwb color space has 3 channels but (0 30%) has 2.\n  ,\n2 | a {b: color.hwb(0 30%)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'list/four_elements/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% 40% 0.4)}\n',
  },
  {
    name: 'list/four_elements/error',
    data: "Error: $channels: The hwb color space has 3 channels but (0 30% 40% 0.4) has 4.\n  ,\n2 | a {b: color.hwb(0 30% 40% 0.4)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'hue/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb("foo" 30% 40%)}\n',
  },
  {
    name: 'hue/type/error',
    data: 'Error: $channels: Expected hue channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb("foo" 30% 40%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'whiteness/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 "foo" 40%)}\n',
  },
  {
    name: 'whiteness/type/error',
    data: 'Error: $channels: Expected whiteness channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb(0 "foo" 40%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'whiteness/unit/none/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30 40%)}\n',
  },
  {
    name: 'whiteness/unit/none/error',
    data: 'Error: $whiteness: Expected 30 to have unit "%".\n  ,\n2 | a {b: color.hwb(0 30 40%)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'whiteness/unit/wrong/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30px 40%)}\n',
  },
  {
    name: 'whiteness/unit/wrong/error',
    data: 'Error: $whiteness: Expected 30px to have unit "%".\n  ,\n2 | a {b: color.hwb(0 30px 40%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blackness/type/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% "foo")}\n',
  },
  {
    name: 'blackness/type/error',
    data: 'Error: $channels: Expected blackness channel to be a number, was "foo".\n  ,\n2 | a {b: color.hwb(0 30% "foo")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blackness/unit/none/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% 40)}\n',
  },
  {
    name: 'blackness/unit/none/error',
    data: 'Error: $blackness: Expected 40 to have unit "%".\n  ,\n2 | a {b: color.hwb(0 30% 40)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'blackness/unit/wrong/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% 40px)}\n',
  },
  {
    name: 'blackness/unit/wrong/error',
    data: 'Error: $blackness: Expected 40px to have unit "%".\n  ,\n2 | a {b: color.hwb(0 30% 40px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'alpha/unit/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 0% 0% / 0.5px)}\n',
  },
  {
    name: 'alpha/unit/error',
    data: 'Error: $alpha: Expected 0.5px to have unit "%" or no units.\n  ,\n2 | a {b: color.hwb(0 0% 0% / 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'quoted_var_slash/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% "var(--foo) / 0.4")}\n',
  },
  {
    name: 'quoted_var_slash/error',
    data: 'Error: $channels: Expected blackness channel to be a number, was "var(--foo) / 0.4".\n  ,\n2 | a {b: color.hwb(0 30% "var(--foo) / 0.4")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
