// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/04_basic_variables.hrx

export default [
  {
    name: 'input.scss',
    data: '$color: "black";\n$color: red;\n$background: "blue";\n\na {\n  color: $color;\n  background: $background;\n}\n\n$y: before;\n\n$x: 1 2 $y;\n\nfoo {\n  a: $x;\n}\n\n$y: after;\n\nfoo {\n  a: $x;\n}',
  },
  {
    name: 'output.css',
    data: 'a {\n  color: red;\n  background: "blue";\n}\n\nfoo {\n  a: 1 2 before;\n}\n\nfoo {\n  a: 1 2 before;\n}\n',
  },
]
