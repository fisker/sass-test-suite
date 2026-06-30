export default [
  {
    name: 'input.scss',
    data: 'a { -#{"foo"}-bar: b; }\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  -foo-bar: b;\n}\n',
  },
]
