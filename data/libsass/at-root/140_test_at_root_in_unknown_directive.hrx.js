export default [
  {
    name: 'input.scss',
    data: '@fblthp {\n  .foo {\n    @at-root .bar {a: b}\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@fblthp {\n  .bar {\n    a: b;\n  }\n}\n',
  },
]
