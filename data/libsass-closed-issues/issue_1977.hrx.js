export default [
  {
    name: 'input.scss',
    data: 'body#some-\\(selector\\) {\ncolor: red;\n}\n\n#äöü  {\n  color: reds;\n}',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\nbody#some-\\(selector\\) {\n  color: red;\n}\n\n#äöü {\n  color: reds;\n}\n',
  },
]
