// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/darken.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: darken(#abcdef, 10%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(128.16, 179.5, 230.84);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: darken(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: darken() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: -12.4390243902%)\ncolor.adjust($color, $lightness: -10%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: darken(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
