export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$list: "item-1" "item-2" "item-3";\n\n#hello {\n  @if list.length($list) % 2 == 0 {\n    color: blue;\n  }\n\n  @else {\n    color: red;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '#hello {\n  color: red;\n}\n',
  },
]
