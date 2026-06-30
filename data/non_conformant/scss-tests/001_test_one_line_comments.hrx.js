export default [
  {
    name: 'input.scss',
    data: '.foo {// bar: baz;}\n  baz: bang; //}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  baz: bang;\n}\n',
  },
]
