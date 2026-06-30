export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.hue(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 210deg;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [color-functions]: color.hue() is deprecated. Suggestion:\n\ncolor.channel($color, "hue", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.hue(#abcdef)}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
]
