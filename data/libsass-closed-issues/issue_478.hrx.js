export default [
  {
    name: 'input.scss',
    data: '$x: "x";\n$y: "y";\n#{$x}--#{$y} {\n  a: 1\n}\n',
  },
  {
    name: 'output.css',
    data: 'x--y {\n  a: 1;\n}\n',
  },
]
