// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/green.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.green(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 205;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [color-functions]: color.green() is deprecated. Suggestion:\n\ncolor.channel($color, "green", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.green(#abcdef)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
]
