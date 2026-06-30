// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/style_rule/top_level_parent.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: '& {a: b}\n',
  },
  {
    name: 'output.css',
    data: '& {\n  a: b;\n}\n',
  },
]
