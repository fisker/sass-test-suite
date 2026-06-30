export default [
  {
    name: 'input.scss',
    data: 'test {\n  left: expression(callSomeFunc());\n  content: expression("Smile :-)");\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  left: expression(callSomeFunc());\n  content: expression("Smile :-)");\n}\n',
  },
]
