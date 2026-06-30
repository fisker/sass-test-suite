// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/complement.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: complement(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #efcdab;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.complement instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: complement(#abcdef)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
