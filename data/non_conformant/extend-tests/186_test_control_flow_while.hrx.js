export default [
  {
    name: 'input.scss',
    data: '.base-0  { color: green; }\n.base-1  { display: block; }\n.base-2  { border: 1px solid blue; }\n.added {\n$i : 0;\n@while $i < 3 {\n  @extend .base-#{$i};\n  $i : $i + 1;\n}\n}\n',
  },
  {
    name: 'output.css',
    data: '.base-0, .added {\n  color: green;\n}\n\n.base-1, .added {\n  display: block;\n}\n\n.base-2, .added {\n  border: 1px solid blue;\n}\n',
  },
]
