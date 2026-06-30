export default [
  {
    name: 'input.scss',
    data: 'foo {#{"baz" + "bang"}: blip}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bazbang: blip;\n}\n',
  },
]
