export default [
  {
    name: 'input.scss',
    data: '.foo bar[val="//"] {\n  baz: bang; //}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo bar[val="//"] {\n  baz: bang;\n}\n',
  },
]
