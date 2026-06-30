export default [
  {
    name: 'input.scss',
    data: 'foo {bar#{"baz" + "bang"}: blip}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  barbazbang: blip;\n}\n',
  },
]
