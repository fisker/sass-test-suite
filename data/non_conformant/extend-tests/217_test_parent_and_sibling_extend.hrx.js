export default [
  {
    name: 'input.scss',
    data: '%foo %bar%baz {c: d}\n\n.parent1 {\n@extend %foo;\n.child1 {@extend %bar}\n}\n\n.parent2 {\n@extend %foo;\n.child2 {@extend %baz}\n}\n',
  },
  {
    name: 'output.css',
    data: '.parent1 .parent2 .child1.child2, .parent2 .parent1 .child1.child2 {\n  c: d;\n}\n',
  },
]
