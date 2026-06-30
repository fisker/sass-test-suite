export default [
  {
    name: 'input.scss',
    data: '$foo: foo;\n\n%#{$foo} {color: blue}\n.bar {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  color: blue;\n}\n',
  },
]
