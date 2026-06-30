export default [
  {
    name: 'input.scss',
    data: 'div {\n  color: unquote("hello");\n  color: un#{quo}te("hello");\n  color: ("hello")un#{quo}te;\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  color: hello;\n  color: unquote("hello");\n  color: "hello" unquote;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.unquote instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   color: unquote("hello");\n  |          ^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:10  root stylesheet\n',
  },
]
