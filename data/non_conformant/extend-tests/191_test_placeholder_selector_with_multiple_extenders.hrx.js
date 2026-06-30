export default [
  {
    name: 'input.scss',
    data: '%foo {color: blue}\n.bar {@extend %foo}\n.baz {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz, .bar {\n  color: blue;\n}\n',
  },
]
