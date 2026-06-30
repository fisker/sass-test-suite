export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\nfoo {\r\n  test: color.change(red, $red: 0.5, $hue: 0.2);\r\n}',
  },
  {
    name: 'error',
    data: "Error: $hue: Color space rgb doesn't have a channel with this name.\n  ,\n3 |   test: color.change(red, $red: 0.5, $hue: 0.2);\r\n  |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:9  root stylesheet\n",
  },
]
