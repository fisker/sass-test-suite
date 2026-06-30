export default [
  {
    name: 'input.scss',
    data: 'a {b: opacify(rgba(red, 0.5), 0.3)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.8);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: opacify(rgba(red, 0.5), 0.3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: opacify() is deprecated. Suggestions:\n\ncolor.scale($color, $alpha: 60%)\ncolor.adjust($color, $alpha: 0.3)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: opacify(rgba(red, 0.5), 0.3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
