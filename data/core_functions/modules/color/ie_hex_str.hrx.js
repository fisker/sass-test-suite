export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #FFABCDEF;\n}\n',
  },
]
