// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/red.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.red(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 171;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [color-functions]: color.red() is deprecated. Suggestion:\n\ncolor.channel($color, "red", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.red(#abcdef)}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
]
