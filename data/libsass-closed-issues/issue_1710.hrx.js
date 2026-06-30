export default [
  {
    name: 'input.scss',
    data: 'ul, ol {\n    & & {\n      display: block;\n    }\n  }\n',
  },
  {
    name: 'output.css',
    data: 'ul ul, ul ol, ol ul, ol ol {\n  display: block;\n}\n',
  },
]
