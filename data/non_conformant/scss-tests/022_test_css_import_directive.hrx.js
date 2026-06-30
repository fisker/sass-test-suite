export default [
  {
    name: 'input.scss',
    data: '@import url("foo.css");',
  },
  {
    name: 'output.css',
    data: '@import url("foo.css");\n',
  },
]
