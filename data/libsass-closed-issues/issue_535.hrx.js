export default [
  {
    name: 'input.scss',
    data: '$width: 10;\n\n.test {\n  margin-left: - 54 * $width - 1;\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  margin-left: -541;\n}\n',
  },
]
