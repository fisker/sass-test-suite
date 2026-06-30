export default [
  {
    name: 'input.scss',
    data: 'foo {bar#{1 + 2}: blip}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar3: blip;\n}\n',
  },
]
