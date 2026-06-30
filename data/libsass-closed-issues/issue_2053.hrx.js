export default [
  {
    name: 'input.scss',
    data: '.foo[disabled] {\n    @extend .foo;\n    background: blue;\n  }\n.bar[disabled] {\n  foo {\n    @extend .bar;\n    background: blue;\n  }\n}\nfoo {\n  .baz[disabled] {\n    @extend .baz;\n    background: blue;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '.foo[disabled] {\n  background: blue;\n}\n\n.bar[disabled] foo {\n  background: blue;\n}\n\nfoo .baz[disabled] {\n  background: blue;\n}\n',
  },
]
