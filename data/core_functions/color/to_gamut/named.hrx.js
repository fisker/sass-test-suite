export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut($color: pink, $space: rgb, $method: local-minde)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: pink;\n}\n',
  },
]
