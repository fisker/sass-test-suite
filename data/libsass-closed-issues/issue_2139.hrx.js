export default [
  {
    name: 'input.scss',
    data: ".foo {\n  color: #FFF;\n}\n\n.bar .baz {\n  @extend .foo;\n\n  border: '1px';\n}\n\n*:not(.foo) {\n  display: none;\n}\n",
  },
  {
    name: 'output.css',
    data: '.foo, .bar .baz {\n  color: #FFF;\n}\n\n.bar .baz {\n  border: "1px";\n}\n\n*:not(.foo) {\n  display: none;\n}\n',
  },
]
