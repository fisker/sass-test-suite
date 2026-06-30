export default [
  {
    name: 'input.scss',
    data: '%foo %bar {\na: b;\n}\n\n.parent1 {\n@extend %foo;\n\n.child {\n  @extend %bar;\n}\n}\n\n.parent2 {\n@extend %foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.parent1 .child {\n  a: b;\n}\n',
  },
]
