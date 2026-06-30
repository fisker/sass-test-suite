export default [
  {
    name: 'input.scss',
    data: 'a {b: lighten(#abcdef, 10%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(213.84, 230.5, 247.16);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: 51%)\ncolor.adjust($color, $lightness: 10%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: lighten(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
