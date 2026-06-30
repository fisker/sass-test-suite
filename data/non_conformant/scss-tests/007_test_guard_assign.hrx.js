export default [
  {
    name: 'input.scss',
    data: '$var: 2 !default;\n\nfoo {a: $var}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 2;\n}\n',
  },
]
