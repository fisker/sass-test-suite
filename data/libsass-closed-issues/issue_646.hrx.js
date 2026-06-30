export default [
  {
    name: 'input.scss',
    data: '@function foo() {\n  /* $bar: 1; */\n @return true;\n}\n\nfoo {\n  foo: foo();\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: true;\n}\n',
  },
]
