// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/boolean_operations.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: 'a {\n  and: true and false;\n  or: true or false;\n  not: not true;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  and: true and false;\n  or: true or false;\n  not: not true;\n}\n',
  },
]
