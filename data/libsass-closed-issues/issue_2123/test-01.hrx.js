export default [
  {
    name: 'input.scss',
    data: '.class{background-image:url(//foo.bar/favicon.ico)}',
  },
  {
    name: 'output.css',
    data: '.class {\n  background-image: url(//foo.bar/favicon.ico);\n}\n',
  },
]
