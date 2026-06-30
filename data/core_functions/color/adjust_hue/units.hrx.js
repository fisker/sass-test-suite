// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust_hue/units.hrx

export default [
  {
    name: 'deg/input.scss',
    data: 'a {b: adjust-hue(red, 60deg)}\n',
  },
  {
    name: 'deg/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'deg/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-hue(red, 60deg)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: adjust-hue() is deprecated. Suggestion:\n\ncolor.adjust($color, $hue: 60deg)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: adjust-hue(red, 60deg)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'unitless/input.scss',
    data: 'a {b: adjust-hue(red, 60)}\n',
  },
  {
    name: 'unitless/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'unitless/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-hue(red, 60)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: adjust-hue() is deprecated. Suggestion:\n\ncolor.adjust($color, $hue: 60deg)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: adjust-hue(red, 60)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'unknown/input.scss',
    data: 'a {b: adjust-hue(red, 60in)}\n',
  },
  {
    name: 'unknown/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'unknown/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-hue(red, 60in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [function-units]: $degrees: Passing a unit other than deg (60in) is deprecated.\n\nTo preserve current behavior: calc($degrees / 1in)\n\nSee https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: adjust-hue(red, 60in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: adjust-hue() is deprecated. Suggestion:\n\ncolor.adjust($color, $hue: 60deg)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: adjust-hue(red, 60in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'angle/input.scss',
    data: 'a {b: adjust-hue(red, 60rad)}\n',
  },
  {
    name: 'angle/output.css',
    data: 'a {\n  b: rgb(0, 179.576224164, 255);\n}\n',
  },
  {
    name: 'angle/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-hue(red, 60rad)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: adjust-hue() is deprecated. Suggestion:\n\ncolor.adjust($color, $hue: 3437.7467707849deg)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: adjust-hue(red, 60rad)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
