export default [
  {
    name: 'input.scss',
    data: '#context %foo, .bar .baz {color: blue}\n\n.bat {\n  @extend %foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '#context .bat, .bar .baz {\n  color: blue;\n}\n',
  },
]
