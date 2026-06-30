export default [
  {
    name: 'input.scss',
    data: '@function foo() {@return 1}\n\nfoo {\n  @function foo() {@return 2}\n  a: foo();\n}\n\nbaz {b: foo()}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 2;\n}\n\nbaz {\n  b: 1;\n}\n',
  },
]
