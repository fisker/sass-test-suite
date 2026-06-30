export default [
  {
    name: 'input.scss',
    data: '.foo {\n  border: {\n    right: 10px solid /*here is a comment*/;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  border-right: 10px solid;\n}\n',
  },
]
