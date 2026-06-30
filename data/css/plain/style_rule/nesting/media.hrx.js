// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/style_rule/nesting/media.hrx

export default [
  {
    name: 'one_level/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'one_level/plain.css',
    data: 'a {@media b {c: d}}\n',
  },
  {
    name: 'one_level/output.css',
    data: '@media b {\n  a {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'two_levels/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'two_levels/plain.css',
    data: 'a { b {@media c {d: e}}}\n',
  },
  {
    name: 'two_levels/output.css',
    data: 'a {\n  b {\n    @media c {\n      d: e;\n    }\n  }\n}\n',
  },
  {
    name: 'merged/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'merged/plain.css',
    data: 'a { b {@media c {@media (d) {e: f}}}}\n',
  },
  {
    name: 'merged/output.css',
    data: 'a {\n  b {\n    @media c {\n      @media (d) {\n        e: f;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'interleaved/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'interleaved/plain.css',
    data: 'a {\n  @media b {\n    c {\n      @media (d) {\n        e: f;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'interleaved/output.css',
    data: '@media b {\n  a {\n    c {\n      @media (d) {\n        e: f;\n      }\n    }\n  }\n}\n',
  },
]
