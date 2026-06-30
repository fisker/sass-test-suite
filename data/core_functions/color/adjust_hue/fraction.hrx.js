export default [
  {
    name: 'input.scss',
    data: 'a {b: adjust-hue(red, 0.5)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(255, 2.125, 0);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-hue(red, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: adjust-hue() is deprecated. Suggestion:\n\ncolor.adjust($color, $hue: 0.5deg)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: adjust-hue(red, 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
