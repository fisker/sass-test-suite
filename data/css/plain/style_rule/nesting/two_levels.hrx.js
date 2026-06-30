// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/style_rule/nesting/two_levels.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: 'a {b {c {d: e}}}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b {\n    c {\n      d: e;\n    }\n  }\n}\n',
  },
]
