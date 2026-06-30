// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/mix.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: mix(#abcdef, #daddee)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(194.5, 213, 238.5);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.mix instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mix(#abcdef, #daddee)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
