export default [
  {
    name: 'input.scss',
    data: 'a {b: opacity(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.opacity instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: opacity(#abcdef)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
