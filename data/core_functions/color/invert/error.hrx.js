// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/invert/error.hrx

export default [
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.invert()}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.invert()}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function invert($color, $weight: 100%, $space: null) {\n  |           =========================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise, 0%, hsl, 1)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: color.invert(turquoise, 0%, hsl, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function invert($color, $weight: 100%, $space: null) {\n  |           =========================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'global/number_with_weight/input.scss',
    data: 'a {b: invert(1, 50%)}\n',
  },
  {
    name: 'global/number_with_weight/error',
    data: "Error: Only one argument may be passed to the plain-CSS invert() function.\n  ,\n1 | a {b: invert(1, 50%)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'global/type/color/input.scss',
    data: 'a {b: invert(c)}\n',
  },
  {
    name: 'global/type/color/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(c)}\n  |       ^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color: c is not a color.\n  ,\n1 | a {b: invert(c)}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/legacy/same/implicit/input.scss',
    data: 'a {b: invert(rgb(none 10 20))}\n',
  },
  {
    name: 'missing/legacy/same/implicit/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(rgb(none 10 20))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $red: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: rgb(none 10 20)).\n  ,\n1 | a {b: invert(rgb(none 10 20))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/legacy/same/explicit/input.scss',
    data: 'a {b: invert(hsl(0 40% none), $space: hsl)}\n',
  },
  {
    name: 'missing/legacy/same/explicit/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(hsl(0 40% none), $space: hsl)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $lightness: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: hsl(0deg 40% none)).\n  ,\n1 | a {b: invert(hsl(0 40% none), $space: hsl)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/legacy/same/hwb_hue/input.scss',
    data: 'a {b: invert(hwb(none 10% 20%), $space: hwb)}\n',
  },
  {
    name: 'missing/legacy/same/hwb_hue/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(hwb(none 10% 20%), $space: hwb)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: hwb(none 10% 20%)).\n  ,\n1 | a {b: invert(hwb(none 10% 20%), $space: hwb)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/legacy/analogous/input.scss',
    data: 'a {b: invert(rgb(10 none 20), $space: xyz)}\n',
  },
  {
    name: 'missing/legacy/analogous/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(rgb(10 none 20), $space: xyz)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $y: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: color(xyz 0.0025142545 none 0.0067080366)).\n  ,\n1 | a {b: invert(rgb(10 none 20), $space: xyz)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/legacy/powerless/input.scss',
    data: 'a {b: invert(grey, $space: hsl)}\n',
  },
  {
    name: 'missing/legacy/powerless/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(grey, $space: hsl)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: hsl(none 0% 50.1960784314%)).\n  ,\n1 | a {b: invert(grey, $space: hsl)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/modern/same/input.scss',
    data: 'a {b: invert(color(srgb none 0.1 0.2), $space: srgb)}\n',
  },
  {
    name: 'missing/modern/same/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(color(srgb none 0.1 0.2), $space: srgb)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $red: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: color(srgb none 0.1 0.2)).\n  ,\n1 | a {b: invert(color(srgb none 0.1 0.2), $space: srgb)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/modern/analogous/input.scss',
    data: 'a {b: invert(color(rec2020 0.1 none 0.2), $space: xyz)}\n',
  },
  {
    name: 'missing/modern/analogous/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(color(rec2020 0.1 none 0.2), $space: xyz)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $y: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: color(xyz 0.0237000113 none 0.0589013339)).\n  ,\n1 | a {b: invert(color(rec2020 0.1 none 0.2), $space: xyz)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/modern/powerless/input.scss',
    data: 'a {b: invert(color(rec2020 0.4 0.4 0.4), $space: lch)}\n',
  },
  {
    name: 'missing/modern/powerless/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(color(rec2020 0.4 0.4 0.4), $space: lch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: lch(48.649404846% 0 none)).\n  ,\n1 | a {b: invert(color(rec2020 0.4 0.4 0.4), $space: lch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/color/input.scss',
    data: '@use "sass:color";\na {b: color.invert(c)}\n',
  },
  {
    name: 'type/color/error',
    data: "Error: $color: c is not a color.\n  ,\n2 | a {b: color.invert(c)}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'type/weight/input.scss',
    data: '@use "sass:color";\na {b: color.invert(red, c)}\n',
  },
  {
    name: 'type/weight/error',
    data: "Error: $weight: c is not a number.\n  ,\n2 | a {b: color.invert(red, c)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'type/space/input.scss',
    data: '@use "sass:color";\na {b: color.invert(red, 10%, 1)}\n',
  },
  {
    name: 'type/space/error',
    data: "Error: $space: 1 is not a string.\n  ,\n2 | a {b: color.invert(red, 10%, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'space/quoted/input.scss',
    data: '@use "sass:color";\na {b: color.invert(red, 10%, "lch")}\n',
  },
  {
    name: 'space/quoted/error',
    data: 'Error: $space: Expected "lch" to be an unquoted string.\n  ,\n2 | a {b: color.invert(red, 10%, "lch")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'space/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.invert(red, 10%, c)}\n',
  },
  {
    name: 'space/unknown/error',
    data: 'Error: $space: Unknown color space "c".\n  ,\n2 | a {b: color.invert(red, 10%, c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'space/missing/default_weight/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lab(50% -10 10))}\n',
  },
  {
    name: 'space/missing/default_weight/error',
    data: "Error: $color: To use color.invert() with non-legacy color lab(50% -10 10), you must provide a $space.\n  ,\n2 | a {b: color.invert(lab(50% -10 10))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'space/missing/zero_weight/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lab(50% -10 10), 0%)}\n',
  },
  {
    name: 'space/missing/zero_weight/error',
    data: "Error: $color: To use color.invert() with non-legacy color lab(50% -10 10), you must provide a $space.\n  ,\n2 | a {b: color.invert(lab(50% -10 10), 0%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'bounds/too_low/input.scss',
    data: '@use "sass:color";\na {b: color.invert(red, -0.001%)}\n',
  },
  {
    name: 'bounds/too_low/error',
    data: "Error: $weight: Expected -0.001% to be within 0% and 100%.\n  ,\n2 | a {b: color.invert(red, -0.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'bounds/too_high/input.scss',
    data: '@use "sass:color";\na {b: color.invert(red, 100.001%)}\n',
  },
  {
    name: 'bounds/too_high/error',
    data: "Error: $weight: Expected 100.001% to be within 0% and 100%.\n  ,\n2 | a {b: color.invert(red, 100.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
