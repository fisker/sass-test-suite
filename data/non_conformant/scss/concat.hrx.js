export default [
  {
    name: 'input.scss',
    data: 'div {\n  a: hello + "goodbye";\n  b: "hello" + goodbye;\n  c: 3 + "hello";\n  d: "hello" + 3;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  a: hellogoodbye;\n  b: "hellogoodbye";\n  c: "3hello";\n  d: "hello3";\n}\n',
  },
]
