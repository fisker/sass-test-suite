export default [
  {
    name: 'color/type/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(c, $method: local-minde)}\n',
  },
  {
    name: 'color/type/error',
    data: "Error: $color: c is not a color.\n  ,\n2 | a {b: color.to-gamut(c, $method: local-minde)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'space/type/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(pink, $space: red, $method: local-minde)}\n',
  },
  {
    name: 'space/type/error',
    data: "Error: $space: red is not a string.\n  ,\n2 | a {b: color.to-gamut(pink, $space: red, $method: local-minde)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'space/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(pink, $space: c, $method: local-minde)}\n',
  },
  {
    name: 'space/unknown/error',
    data: 'Error: $space: Unknown color space "c".\n  ,\n2 | a {b: color.to-gamut(pink, $space: c, $method: local-minde)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'space/quoted/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(pink, $space: "rgb", $method: local-minde)}\n',
  },
  {
    name: 'space/quoted/error',
    data: 'Error: $space: Expected "rgb" to be an unquoted string.\n  ,\n2 | a {b: color.to-gamut(pink, $space: "rgb", $method: local-minde)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'method/type/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(pink, $method: 1)}\n',
  },
  {
    name: 'method/type/error',
    data: "Error: $method: 1 is not a string.\n  ,\n2 | a {b: color.to-gamut(pink, $method: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'method/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(pink, $method: c)}\n',
  },
  {
    name: 'method/unknown/error',
    data: 'Error: Unknown gamut map method "c".\n  ,\n2 | a {b: color.to-gamut(pink, $method: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'method/quoted/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(pink, $method: "clip")}\n',
  },
  {
    name: 'method/quoted/error',
    data: 'Error: $method: Expected "clip" to be an unquoted string.\n  ,\n2 | a {b: color.to-gamut(pink, $method: "clip")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'method/absent/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(pink)}\n',
  },
  {
    name: 'method/absent/error',
    data: "Error: $method: color.to-gamut() requires a $method argument for forwards-compatibility with changes in the CSS spec. Suggestion:\n\n$method: local-minde\n  ,\n2 | a {b: color.to-gamut(pink)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'method/null/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(pink, $method: null)}\n',
  },
  {
    name: 'method/null/error',
    data: "Error: $method: color.to-gamut() requires a $method argument for forwards-compatibility with changes in the CSS spec. Suggestion:\n\n$method: local-minde\n  ,\n2 | a {b: color.to-gamut(pink, $method: null)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut()}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.to-gamut()}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function to-gamut($color, $space: null, $method: null) {\n  |           ============================================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(red, rgb, clip, c)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: color.to-gamut(red, rgb, clip, c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function to-gamut($color, $space: null, $method: null) {\n  |           ============================================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
