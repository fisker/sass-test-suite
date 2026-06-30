export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$map: (aaa: 100, bbb: 200, ccc: 300);\n\na {\n  b: list.length($map);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
]
