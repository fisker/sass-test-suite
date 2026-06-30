// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/extend.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n\na {@extend b}\n',
  },
  {
    name: '_plain.css',
    data: 'b {c: d}\n',
  },
  {
    name: 'output.css',
    data: 'b, a {\n  c: d;\n}\n',
  },
]
