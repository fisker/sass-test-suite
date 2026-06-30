export default [
  {
    name: 'legacy/input.scss',
    data: 'a {b: invert(red)}\n',
  },
  {
    name: 'legacy/output.css',
    data: 'a {\n  b: aqua;\n}\n',
  },
  {
    name: 'legacy/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(red)}\n  |       ^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'modern/input.scss',
    data: 'a {b: invert(color(srgb 0 0.4 1), $space: srgb)}\n',
  },
  {
    name: 'modern/output.css',
    data: 'a {\n  b: color(srgb 1 0.6 0);\n}\n',
  },
  {
    name: 'modern/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.invert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(color(srgb 0 0.4 1), $space: srgb)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'number/input.scss',
    data: 'a {b: invert(10%)}\n',
  },
  {
    name: 'number/output.css',
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
    data: "a {b: invert(unquote('calc(1)'))}\n",
  },
  {
    name: 'with_unquoted_calc/output.css',
    data: 'a {\n  b: invert(calc(1));\n}\n',
  },
  {
    name: 'with_unquoted_calc/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.unquote instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: invert(unquote('calc(1)'))}\n  |              ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:14  root stylesheet\n",
  },
]
