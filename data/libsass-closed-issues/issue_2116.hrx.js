export default [
  {
    name: 'input.scss',
    data: '@function foo() {\n  @return if(& != null, green, red);\n}\n\ntest {\n  color: foo();\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  color: green;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass(& != null): green; else: red)\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n2 |   @return if(& != null, green, red);\n  |           ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n",
  },
]
