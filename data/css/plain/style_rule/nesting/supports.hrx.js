export default [
  {
    name: 'one_level/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'one_level/plain.css',
    data: 'a {@supports (b: c) {d: e}}\n',
  },
  {
    name: 'one_level/output.css',
    data: '@supports (b: c) {\n  a {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'two_levels/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'two_levels/plain.css',
    data: 'a { b {@supports (c: d) {e: f}}}\n',
  },
  {
    name: 'two_levels/output.css',
    data: 'a {\n  b {\n    @supports (c: d) {\n      e: f;\n    }\n  }\n}\n',
  },
  {
    name: 'interleaved/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'interleaved/plain.css',
    data: 'a {\n  @supports (b: c) {\n    d {\n      @supports (e: f) {\n        g: h;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'interleaved/output.css',
    data: '@supports (b: c) {\n  a {\n    d {\n      @supports (e: f) {\n        g: h;\n      }\n    }\n  }\n}\n',
  },
]
