export default [
  {
    name: 'input.scss',
    data: 'a {b: green(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 205;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.green instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: green(#abcdef)}\n  |       ^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: green() is deprecated. Suggestion:\n\ncolor.channel($color, "green", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: green(#abcdef)}\n  |       ^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
]
