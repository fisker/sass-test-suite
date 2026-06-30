export default [
  {
    name: 'true/same_space/identical/input.scss',
    data: '@use "sass:color";\na {b: color.same(#abcdef, #abcdef)}\n',
  },
  {
    name: 'true/same_space/identical/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/same_space/within_epsilon/input.scss',
    data: '@use "sass:color";\na {\n  b: color.same(\n    lab(50.0000000000001 29.9999999999999 -20.0000000000001),\n    lab(50 30 -20)\n  );\n}\n',
  },
  {
    name: 'true/same_space/within_epsilon/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/same_space/with_alpha/input.scss',
    data: '@use "sass:color";\na {b: color.same(oklch(50% 30% 120deg / 0.3), oklch(50% 30% 120deg / 0.3))}\n',
  },
  {
    name: 'true/same_space/with_alpha/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/same_space/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.same(color(srgb 2.3 -1 42), color(srgb 2.3 -1 42))}\n',
  },
  {
    name: 'true/same_space/out_of_gamut/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/same_space/none_and_zero/input.scss',
    data: '@use "sass:color";\na {b: color.same(color(display-p3 0.1 0.3 none), color(display-p3 0.1 0.3 0))}\n',
  },
  {
    name: 'true/same_space/none_and_zero/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/same_space/both_none/input.scss',
    data: '@use "sass:color";\na {\n  b: color.same(color(display-p3 0.1 0.3 none), color(display-p3 0.1 0.3 none));\n}\n',
  },
  {
    name: 'true/same_space/both_none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/different_space/no_none/input.scss',
    data: '@use "sass:color";\na {b: color.same(plum, hsl(300, 47.2868217054%, 74.7058823529%))}\n',
  },
  {
    name: 'true/different_space/no_none/output.css',
    data: 'a {\n  b: true;\n}\n\n',
  },
  {
    name: 'true/different_space/one_none/input.scss',
    data: '@use "sass:color";\na {\n  b: color.same(\n    color(rec2020 0.5 none 0.2),\n    oklab(44.66886691637825% 0.2366736512579 0.01872833430856)\n  );\n}\n',
  },
  {
    name: 'true/different_space/one_none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/different_space/both_none/input.scss',
    data: '@use "sass:color";\na {\n  b: color.same(\n    color(srgb-linear none 0.9 0.8),\n    rgb(none 243.445228830895 231.114597102735)\n  );\n}\n',
  },
  {
    name: 'true/different_space/both_none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'false/same_space/no_none/input.scss',
    data: '@use "sass:color";\na {b: color.same(#abcdef, #fedcba)}\n',
  },
  {
    name: 'false/same_space/no_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/same_space/none_and_nonzero/input.scss',
    data: '@use "sass:color";\na {\n  b: color.same(\n    color(prophoto-rgb 0.1 0.2 none),\n    color(prophoto-rgb 0.1 0.2 0.3)\n  );\n}\n',
  },
  {
    name: 'false/same_space/none_and_nonzero/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/different_space/no_none/input.scss',
    data: '@use "sass:color";\na {b: color.same(color(srgb 0.1 0.2 0.3), color(srgb-linear 0.1 0.2 0.3))}\n',
  },
  {
    name: 'false/different_space/no_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/different_space/both_none/input.scss',
    data: '// This test verifies that none is converted to 0 *before* conversion to XYZ.\n@use "sass:color";\na {\n  b: color.same(\n    color(rec2020 0.5 none 0.2),\n    color(xyz 0.174805932224126 none 0.058901333881161)\n  );\n}\n',
  },
  {
    name: 'false/different_space/both_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.same($color1: red, $color2: green)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.same(plum)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color2.\n  ,--> input.scss\n2 | a {b: color.same(plum)}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function same($color1, $color2) {\n  |           ====================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.same(red, green, blue)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: color.same(red, green, blue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function same($color1, $color2) {\n  |           ====================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/color1/input.scss',
    data: '@use "sass:color";\na {b: color.same(1, red)}\n',
  },
  {
    name: 'error/type/color1/error',
    data: "Error: $color1: 1 is not a color.\n  ,\n2 | a {b: color.same(1, red)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/color2/input.scss',
    data: '@use "sass:color";\na {b: color.same(red, 1)}\n',
  },
  {
    name: 'error/type/color2/error',
    data: "Error: $color2: 1 is not a color.\n  ,\n2 | a {b: color.same(red, 1)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
