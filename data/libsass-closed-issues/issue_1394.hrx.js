export default [
  {
    name: 'input.scss',
    data: 'foo {\n  width: \\10 + \\20 \\ ;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  width: \\10 \\ \\ ;\n}\n',
  },
]
