export default [
  {
    name: 'input.scss',
    data: 'div[class|="blah"] {\n  color: blue;\n}',
  },
  {
    name: 'output.css',
    data: 'div[class|=blah] {\n  color: blue;\n}\n',
  },
]
