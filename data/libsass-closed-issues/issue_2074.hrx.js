export default [
  {
    name: 'input.scss',
    data: '@function calc_foo() {\r\n  @return "bar";\r\n}\r\nfoo {\r\n  test1: calc-foo();\r\n  test2: calc_foo();\r\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  test1: "bar";\n  test2: "bar";\n}\n',
  },
]
