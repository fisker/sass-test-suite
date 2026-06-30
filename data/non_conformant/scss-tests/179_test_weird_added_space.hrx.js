export default [
  {
    name: 'input.scss',
    data: '$value : bip;\n\nfoo {\n  bar: -moz-#{$value};\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: -moz-bip;\n}\n',
  },
]
