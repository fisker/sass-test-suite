export default [
  {
    name: 'input.scss',
    data: 'div {\n  blah: url(//some/absolute/path);\n  blee: url(/*looks-like-a*/comment);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: url(//some/absolute/path);\n  blee: url(/*looks-like-a*/comment);\n}\n',
  },
]
