export default [
  {
    name: 'input.scss',
    data: "$namespace: 'test-';\n$column: 1;\n\n.#{$namespace}#{$column}\\/#{$column} {\n  width: 100% !important;\n}",
  },
  {
    name: 'output.css',
    data: '.test-1\\/1 {\n  width: 100% !important;\n}\n',
  },
]
