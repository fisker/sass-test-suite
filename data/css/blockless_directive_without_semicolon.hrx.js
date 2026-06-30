// https://github.com/sass/sass-spec/blob/HEAD/spec/css/blockless_directive_without_semicolon.hrx

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
