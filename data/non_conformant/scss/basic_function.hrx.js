export default [
  {
    name: 'input.scss',
    data: '@function foo() {\n  @return 1 + 2;\n}\n\nbar {\n  a: foo();\n}\n',
  },
  {
    name: 'output.css',
    data: 'bar {\n  a: 3;\n}\n',
  },
]
