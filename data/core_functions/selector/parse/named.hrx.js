export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\na {b: selector.parse($selector: "c")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
