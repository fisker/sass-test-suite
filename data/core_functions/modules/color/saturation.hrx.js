export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.saturation(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 68%;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [color-functions]: color.saturation() is deprecated. Suggestion:\n\ncolor.channel($color, "saturation", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.saturation(#abcdef)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
]
