export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless($color: red, $channel: "a", $space: lab)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
