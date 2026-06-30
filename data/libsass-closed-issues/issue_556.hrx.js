// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_556.hrx

export default [
  {
    name: 'input.scss',
    data: '$test: (\n  one: 1,\n  two: 2,\n);\n\n$expect: (\n  two: 2,\n  one: 1,\n);\n\n.test {\n  equal: $test == $expect;\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  equal: true;\n}\n',
  },
]
