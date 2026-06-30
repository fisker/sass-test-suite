// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/invert/number.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.invert(1)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: invert(1);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [color-module-compat]: Passing a number (1) to color.invert() is deprecated.\n\nRecommendation: invert(1)\n\n  ,\n2 | a {b: color.invert(1)}\n  |       ^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
]
