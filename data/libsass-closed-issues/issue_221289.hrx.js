// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_221289.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\r\n  bar: if(0,0<0,0);\r\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: false;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass(0): 0 < 0; else: 0)\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n2 |   bar: if(0,0<0,0);\r\n  |        ^^^^^^^^^^^\n  '\n    input.scss 2:8  root stylesheet\n",
  },
]
