// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/scale.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: scale-color(#abcdef, $red: 10%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(179.4, 205, 239);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.scale instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: scale-color(#abcdef, $red: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
