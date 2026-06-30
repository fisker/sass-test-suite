export default [
  {
    name: 'input.scss',
    data: '.foo {\n        h1 {\n                color:red;\n        }\n}\n\n.bar {\n        &:hover h3,\n        h3 {\n                @extend h1;\n        }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo h1,\n.foo .bar h3,\n.bar .foo h3 {\n  color: red;\n}\n',
  },
]
