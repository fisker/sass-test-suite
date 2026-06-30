export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.lightness(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 80.3921568627%;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [color-functions]: color.lightness() is deprecated. Suggestion:\n\ncolor.channel($color, "lightness", $space: hsl)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n2 | a {b: color.lightness(#abcdef)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
]
