export default [
  {
    name: 'input.scss',
    data: 'a {\n  b: if(true, b, c...);\n  c: if(false, b, c...);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: b;\n  c: c;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n2 |   b: if(true, b, c...);\n  |      ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:6  root stylesheet\n\nDEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n3 |   c: if(false, b, c...);\n  |      ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 3:6  root stylesheet\n",
  },
]
