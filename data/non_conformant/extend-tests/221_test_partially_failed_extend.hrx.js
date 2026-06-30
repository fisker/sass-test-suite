export default [
  {
    name: 'input.scss',
    data: 'test { @extend .rc; }\n.rc {color: white;}\n.prices span.pill span.rc {color: red;}\n',
  },
  {
    name: 'output.css',
    data: '.rc, test {\n  color: white;\n}\n\n.prices span.pill span.rc {\n  color: red;\n}\n',
  },
]
