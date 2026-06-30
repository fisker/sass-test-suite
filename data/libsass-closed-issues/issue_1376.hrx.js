export default [
  {
    name: 'input.scss',
    data: '.div{\n  $foo: 1, null, 2, null, 3;\n\n  content: "#{$foo}";\n}',
  },
  {
    name: 'output.css',
    data: '.div {\n  content: "1, 2, 3";\n}\n',
  },
]
