// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/grayscale.hrx

export default [
  {
    name: 'with_color/input.scss',
    data: 'a {b: grayscale(red)}\n',
  },
  {
    name: 'with_color/output.css',
    data: 'a {\n  b: rgb(127.5, 127.5, 127.5);\n}\n',
  },
  {
    name: 'with_color/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.grayscale instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: grayscale(red)}\n  |       ^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'with_number/input.scss',
    data: '// A number should produce a plain function string, for CSS filter functions.\na {b: grayscale(15%)}\n',
  },
  {
    name: 'with_number/output.css',
    data: 'a {\n  b: grayscale(15%);\n}\n',
  },
  {
    name: 'with_css_var/input.scss',
    data: 'a {b: grayscale(var(--c))}\n',
  },
  {
    name: 'with_css_var/output.css',
    data: 'a {\n  b: grayscale(var(--c));\n}\n',
  },
  {
    name: 'with_calc/input.scss',
    data: 'a {b: grayscale(calc(1 + 2))}\n',
  },
  {
    name: 'with_calc/output.css',
    data: 'a {\n  b: grayscale(3);\n}\n',
  },
  {
    name: 'with_unquoted_calc/input.scss',
    data: '@use "sass:string";\na {b: grayscale(string.unquote(\'calc(1)\'))}\n',
  },
  {
    name: 'with_unquoted_calc/output.css',
    data: 'a {\n  b: grayscale(calc(1));\n}\n',
  },
]
