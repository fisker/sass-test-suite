export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @fblthp {\n    .bar {a: b}\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@fblthp {\n  .foo .bar {\n    a: b;\n  }\n}\n',
  },
]
