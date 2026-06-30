export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @function foo() {@return 1}\n  a: foo(); }\n\nbar {b: foo()}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 1;\n}\n\nbar {\n  b: foo();\n}\n',
  },
]
