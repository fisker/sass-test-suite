export default [
  {
    name: 'input.scss',
    data: '$zero: 0;\na {\n  zero: -$zero;\n  zero: $zero * -1;\n}\n$near: 0.000000000001;\na {\n  near: -$near;\n  near: $near * -1;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  zero: 0;\n  zero: 0;\n}\n\na {\n  near: 0;\n  near: 0;\n}\n',
  },
]
