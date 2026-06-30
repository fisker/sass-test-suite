// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/red.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: red(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 171;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.red instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: red(#abcdef)}\n  |       ^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: red() is deprecated. Suggestion:\n\ncolor.channel($color, "red", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: red(#abcdef)}\n  |       ^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
]
