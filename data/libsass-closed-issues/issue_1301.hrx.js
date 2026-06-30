export default [
  {
    name: 'input.scss',
    data: '$name: "my-class";\n\n.-#{$name} {\n  content: "test";\n}\n',
  },
  {
    name: 'output.css',
    data: '.-my-class {\n  content: "test";\n}\n',
  },
]
