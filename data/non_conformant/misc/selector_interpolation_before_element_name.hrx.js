export default [
  {
    name: 'input.scss',
    data: '#{"foo" + " bar"}baz {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo barbaz {\n  a: b;\n}\n',
  },
]
