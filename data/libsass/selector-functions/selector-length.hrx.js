export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\nfoo.bar.baz asd.qwe xyz, second {\r\n  length: list.length(&);\r\n  length: list.length(list.nth(&, 1));\r\n  length: list.length(list.nth(list.nth(&, 1), 1));\r\n}',
  },
  {
    name: 'output.css',
    data: 'foo.bar.baz asd.qwe xyz, second {\n  length: 2;\n  length: 3;\n  length: 1;\n}\n',
  },
]
