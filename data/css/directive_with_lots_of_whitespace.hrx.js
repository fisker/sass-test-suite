// https://github.com/sass/sass-spec/blob/HEAD/spec/css/directive_with_lots_of_whitespace.hrx

export default [
  {
    name: 'input.scss',
    data: '@foo "bar";\n',
  },
  {
    name: 'output.css',
    data: '@foo "bar";\n',
  },
]
