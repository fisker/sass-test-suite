export default [
  {
    name: 'input.scss',
    data: '@media print {\n  a {\n    @at-root (without: media) {\n      b: c;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
