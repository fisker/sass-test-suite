// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/null.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: 'a {\n  x: null;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  x: null;\n}\n',
  },
]
