export default [
  {
    name: 'input.scss',
    data: '$i: 1;\n\n.foo {\n  @while $i != 5 {\n    a: $i;\n    $i: $i + 1;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 1;\n  a: 2;\n  a: 3;\n  a: 4;\n}\n',
  },
]
