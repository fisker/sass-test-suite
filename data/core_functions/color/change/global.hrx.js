export default [
  {
    name: 'legacy/input.scss',
    data: 'a {b: change-color(red, $blue: 50)}\n',
  },
  {
    name: 'legacy/output.css',
    data: 'a {\n  b: #ff0032;\n}\n',
  },
  {
    name: 'legacy/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.change instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: change-color(red, $blue: 50)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'non_legacy/input.scss',
    data: 'a {b: change-color(pink, $chroma: 0.06, $space: oklch)}\n',
  },
  {
    name: 'non_legacy/output.css',
    data: 'a {\n  b: rgb(247.5333922506, 195.8115232441, 204.5286945902);\n}\n',
  },
  {
    name: 'non_legacy/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.change instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: change-color(pink, $chroma: 0.06, $space: oklch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
