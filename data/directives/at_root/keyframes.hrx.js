export default [
  {
    name: 'all/input.scss',
    data: '@keyframes a {\n  @at-root (without: all) {\n    b {c: d}\n  }\n}\n',
  },
  {
    name: 'all/output.css',
    data: '@keyframes a {}\nb {\n  c: d;\n}\n',
  },
]
