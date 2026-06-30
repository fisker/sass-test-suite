export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.channel(rgb(255 none 255), "green")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 0;\n}\n\n',
  },
]
