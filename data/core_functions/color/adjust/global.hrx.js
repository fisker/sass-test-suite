// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/global.hrx

export default [
  {
    name: 'legacy/input.scss',
    data: 'a {b: adjust-color(red, $red: -50)}\n',
  },
  {
    name: 'legacy/output.css',
    data: 'a {\n  b: #cd0000;\n}\n',
  },
  {
    name: 'legacy/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-color(red, $red: -50)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'non_legacy/input.scss',
    data: 'a {b: change-color(pink, $chroma: 0.01, $space: oklch)}\n',
  },
  {
    name: 'non_legacy/output.css',
    data: 'a {\n  b: rgb(217.7587741846, 208.8497862891, 210.1600712342);\n}\n',
  },
  {
    name: 'non_legacy/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.change instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: change-color(pink, $chroma: 0.01, $space: oklch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
