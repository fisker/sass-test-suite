export default [
  {
    name: 'input.scss',
    data: '.foo {\n  yellow: yellow;\n  red: red;\n  blue: blue;\n  white: white;\n  black: black;\n  eval: if(red, yellow, null);\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  yellow: yellow;\n  red: red;\n  blue: blue;\n  white: white;\n  black: black;\n  eval: yellow;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass(red): yellow)\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n7 |   eval: if(red, yellow, null);\n  |         ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 7:9  root stylesheet\n",
  },
]
