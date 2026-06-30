export default [
  {
    name: 'input.scss',
    data: '%foo {color: blue}\n%bar {color: red}\n.baz {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz {\n  color: blue;\n}\n',
  },
]
