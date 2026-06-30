export default [
  {
    name: 'input.scss',
    data: 'a.#{"foo"} b\n{color: red}\n',
  },
  {
    name: 'output.css',
    data: 'a.foo b {\n  color: red;\n}\n',
  },
]
