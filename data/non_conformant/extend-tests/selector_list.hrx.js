export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {x: y}\n\n// Extending a selector list is equivalent to writing two @extends.\n.baz {@extend .foo, .bar}\n\n// The selector list should be parsed after interpolation is resolved.\n.bang {@extend .foo #{","} .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bang, .baz {\n  a: b;\n}\n\n.bar, .bang, .baz {\n  x: y;\n}\n',
  },
]
