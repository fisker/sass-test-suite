// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/hue.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: hue(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 210deg;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.hue instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: hue(#abcdef)}\n  |       ^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: hue(#abcdef)}\n  |       ^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
]
