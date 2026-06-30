export default [
  {
    name: 'with_color/input.scss',
    data: 'a {b: invert(#abcdef)}\n',
  },
  {
    name: 'with_color/output.css',
    data: 'a {\n  b: #543210;\n}\n',
  },
  {
    name: 'with_color/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(#abcdef)}\n  |       ^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'with_number/input.scss',
    data: 'a {b: invert(10%)}\n',
  },
  {
    name: 'with_number/output.css',
    data: 'a {\n  b: invert(10%);\n}\n',
  },
  {
    name: 'with_css_var/input.scss',
    data: 'a {b: invert(var(--c))}\n',
  },
  {
    name: 'with_css_var/output.css',
    data: 'a {\n  b: invert(var(--c));\n}\n',
  },
  {
    name: 'with_calc/input.scss',
    data: 'a {b: invert(calc(1 + 2))}\n',
  },
  {
    name: 'with_calc/output.css',
    data: 'a {\n  b: invert(3);\n}\n',
  },
  {
    name: 'with_unquoted_calc/input.scss',
    data: '@use "sass:string";\na {b: invert(string.unquote(\'calc(1)\'))}\n',
  },
  {
    name: 'with_unquoted_calc/output.css',
    data: 'a {\n  b: invert(calc(1));\n}\n',
  },
]
