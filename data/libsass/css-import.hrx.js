export default [
  {
    name: 'input.scss',
    data: '@import \'foo.css\', "bar.css";\n\ndiv {\n  color: red;\n}',
  },
  {
    name: 'output.css',
    data: '@import \'foo.css\';\n@import "bar.css";\ndiv {\n  color: red;\n}\n',
  },
]
