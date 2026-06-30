// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/desaturate.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: desaturate(#abcdef, 10%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #b0cdea;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: desaturate(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: desaturate() is deprecated. Suggestions:\n\ncolor.scale($color, $saturation: -14.7058823529%)\ncolor.adjust($color, $saturation: -10%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: desaturate(#abcdef, 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
