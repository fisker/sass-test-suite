// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/style_rule/nesting/multiple_complex.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: 'a, b {c, d {e: f}}\n',
  },
  {
    name: 'output.css',
    data: 'a, b {\n  c, d {\n    e: f;\n  }\n}\n',
  },
]
