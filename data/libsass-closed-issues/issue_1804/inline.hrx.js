export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: #{(2px*5in)};\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: calc(10px * 1in);\n}\n',
  },
]
