export default [
  {
    name: 'too_many_args/input.scss',
    data: 'a {b: mix(red, blue, 30%, lch, 1)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 4 arguments allowed, but 5 were passed.\n  ,--> input.scss\n1 | a {b: mix(red, blue, 30%, lch, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function mix($color1, $color2, $weight: 50%, $method: null) {\n  |           ================================================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_few_args/input.scss',
    data: 'a {b: mix(red)}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $color2.\n  ,--> input.scss\n1 | a {b: mix(red)}\n  |       ^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function mix($color1, $color2, $weight: 50%, $method: null) {\n  |           ================================================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'null_method/non_legacy/color1/input.scss',
    data: 'a {b: mix(lch(20% -20 0), red)}\n',
  },
  {
    name: 'null_method/non_legacy/color1/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(lch(20% -20 0), red)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color1: To use color.mix() with non-legacy color lch(20% 0 0deg), you must provide a $method.\n  ,\n1 | a {b: mix(lch(20% -20 0), red)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'null_method/non_legacy/color2/input.scss',
    data: 'a {b: mix(red, lch(20% -20 0))}\n',
  },
  {
    name: 'null_method/non_legacy/color2/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, lch(20% -20 0))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color2: To use color.mix() with non-legacy color lch(20% 0 0deg), you must provide a $method.\n  ,\n1 | a {b: mix(red, lch(20% -20 0))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'color_interpolation_method/input.scss',
    data: 'a {b: mix(red, blue, $method: brighter)}\n',
  },
  {
    name: 'color_interpolation_method/error',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: brighter)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nError: $method: Unknown color space "brighter".\n  ,\n1 | a {b: mix(red, blue, $method: brighter)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'interpolation/number/input.scss',
    data: 'a {b: mix(red, blue, $method: hsl 1)}\n',
  },
  {
    name: 'interpolation/number/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: hsl 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $method: 1 is not a string.\n  ,\n1 | a {b: mix(red, blue, $method: hsl 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'interpolation_list/separator/input.scss',
    data: 'a {b: mix(red, blue, $method: hsl, longer hue)}\n',
  },
  {
    name: 'interpolation_list/separator/error',
    data: "Error: Positional arguments must come before keyword arguments.\n  ,\n1 | a {b: mix(red, blue, $method: hsl, longer hue)}\n  |                                    ^^^^^^^^^^\n  '\n  input.scss 1:36  root stylesheet\n",
  },
  {
    name: 'interpolation_list/slash/input.scss',
    data: 'a {b: mix(red, blue, $method: hsl/longer/hue)}\n',
  },
  {
    name: 'interpolation_list/slash/error',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: hsl/longer/hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nError: $method: Unknown color space "hsl/longer/hue".\n  ,\n1 | a {b: mix(red, blue, $method: hsl/longer/hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'interpolation_list/quoted/input.scss',
    data: 'a {b: mix(red, blue, $method: "hsl longer hue")}\n',
  },
  {
    name: 'interpolation_list/quoted/error',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: "hsl longer hue")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nError: $method: Expected "hsl longer hue" to be an unquoted string.\n  ,\n1 | a {b: mix(red, blue, $method: "hsl longer hue")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'invalid_method/wrong_hue_keyword/input.scss',
    data: 'a {b: mix(red, blue, $method: hsl longer shade)}\n',
  },
  {
    name: 'invalid_method/wrong_hue_keyword/error',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: hsl longer shade)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nError: $method: Expected unquoted string "hue" at the end of (hsl longer shade), was shade.\n  ,\n1 | a {b: mix(red, blue, $method: hsl longer shade)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'invalid_method/unsupported/input.scss',
    data: '// "specified" was a method in an earlier draft of CSS Colors 4, but it was\n// dropped because it required implementations to lazily normalize hues.\na {b: mix(red, blue, $method: hsl specified hue)}\n',
  },
  {
    name: 'invalid_method/unsupported/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | a {b: mix(red, blue, $method: hsl specified hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 3:7  root stylesheet\n\nError: $method: Unknown hue interpolation method specified.\n  ,\n3 | a {b: mix(red, blue, $method: hsl specified hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'extra_character_end/input.scss',
    data: 'a {b: mix(red, blue, $method: hsl longer hue.)}\n',
  },
  {
    name: 'extra_character_end/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: mix(red, blue, $method: hsl longer hue.)}\n  |                                              ^\n  '\n  input.scss 1:46  root stylesheet\n",
  },
  {
    name: 'extra_character_start/input.scss',
    data: 'a {b: mix(red, blue, $method: ,hsl longer hue)}\n',
  },
  {
    name: 'extra_character_start/error',
    data: "Error: Expected expression.\n  ,\n1 | a {b: mix(red, blue, $method: ,hsl longer hue)}\n  |                               ^\n  '\n  input.scss 1:31  root stylesheet\n",
  },
  {
    name: 'unknown_interpolation/input.scss',
    data: 'a {b: mix(red, blue, $method: lch longerhue)}\n',
  },
  {
    name: 'unknown_interpolation/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: lch longerhue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $method: Unknown hue interpolation method longerhue.\n  ,\n1 | a {b: mix(red, blue, $method: lch longerhue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'rectangular_space_with_method/input.scss',
    data: 'a {b: mix(red, blue, $method: srgb longer hue)}\n',
  },
  {
    name: 'rectangular_space_with_method/error',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: srgb longer hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nError: $method: Hue interpolation method "HueInterpolationMethod.longer hue" may not be set for rectangular color space srgb.\n  ,\n1 | a {b: mix(red, blue, $method: srgb longer hue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'missing_hue_string/input.scss',
    data: 'a {b: mix(red, blue, $method: lch decreasing)}\n',
  },
  {
    name: 'missing_hue_string/error',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: lch decreasing)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nError: $method: Expected unquoted string "hue" after (lch decreasing).\n  ,\n1 | a {b: mix(red, blue, $method: lch decreasing)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'parentheses/input.scss',
    data: 'a {b: mix(red, blue, $method: lch (decreasing hue))}\n',
  },
  {
    name: 'parentheses/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, $method: lch (decreasing hue))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $method: (decreasing hue) is not a string.\n  ,\n1 | a {b: mix(red, blue, $method: lch (decreasing hue))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/color1/input.scss',
    data: 'a {b: mix(1, blue)}\n',
  },
  {
    name: 'type/color1/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(1, blue)}\n  |       ^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color1: 1 is not a color.\n  ,\n1 | a {b: mix(1, blue)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/color2/input.scss',
    data: 'a {b: mix(red, 1)}\n',
  },
  {
    name: 'type/color2/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, 1)}\n  |       ^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color2: 1 is not a color.\n  ,\n1 | a {b: mix(red, 1)}\n  |       ^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/weight/input.scss',
    data: 'a {b: mix(red, blue, green)}\n',
  },
  {
    name: 'type/weight/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, green)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $weight: green is not a number.\n  ,\n1 | a {b: mix(red, blue, green)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'bounds/too_low/input.scss',
    data: 'a {b: mix(red, blue, -0.001%)}\n',
  },
  {
    name: 'bounds/too_low/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, -0.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $weight: Expected -0.001% to be within 0% and 100%.\n  ,\n1 | a {b: mix(red, blue, -0.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'bounds/too_high/input.scss',
    data: 'a {b: mix(red, blue, 100.001%)}\n',
  },
  {
    name: 'bounds/too_high/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(red, blue, 100.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $weight: Expected 100.001% to be within 0% and 100%.\n  ,\n1 | a {b: mix(red, blue, 100.001%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
