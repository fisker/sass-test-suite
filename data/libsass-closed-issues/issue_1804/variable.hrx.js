export default [
  {
    name: 'input.scss',
    data: '$foo: 2px;\n$bar: 5in;\n\nfoo {\n  bar: #{($foo*$bar)};\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: calc(10px * 1in);\n}\n',
  },
]
