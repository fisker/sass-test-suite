export default [
  {
    name: 'input.scss',
    data: 'a {b: saturate(#abcdef, 10%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #a6cdf4;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: saturate() is deprecated. Suggestions:\n\ncolor.scale($color, $saturation: 31.25%)\ncolor.adjust($color, $saturation: 10%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: saturate(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
