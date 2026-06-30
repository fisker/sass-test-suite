// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/global.hrx

export default [
  {
    name: 'legacy/input.scss',
    data: 'a {b: scale-color(pink, $blue: 20%)}\n',
  },
  {
    name: 'legacy/output.css',
    data: 'a {\n  b: rgb(255, 192, 213.4);\n}\n',
  },
  {
    name: 'legacy/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.scale instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: scale-color(pink, $blue: 20%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'non_legacy/input.scss',
    data: 'a {b: scale-color(pink, $chroma: -10%, $space: oklch)}\n',
  },
  {
    name: 'non_legacy/output.css',
    data: 'a {\n  b: rgb(250.9720047847, 194.0861924112, 203.8303770998);\n}\n',
  },
  {
    name: 'non_legacy/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.scale instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: scale-color(pink, $chroma: -10%, $space: oklch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
