export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.channel($color: pink, $channel: "hue", $space: hsl)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 349.5238095238deg;\n}\n',
  },
]
