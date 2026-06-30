export default [
  {
    name: 'input.scss',
    data: 'foo {a: 1 + /* flang */ bar}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 1bar;\n}\n',
  },
]
