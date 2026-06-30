export default [
  {
    name: 'one_level/input.scss',
    data: '@use "sass:meta";\n\na {@include meta.load-css("plain")}\n',
  },
  {
    name: 'one_level/plain.css',
    data: 'b {c: d}\n',
  },
  {
    name: 'one_level/output.css',
    data: 'a b {\n  c: d;\n}\n',
  },
  {
    name: 'two_levels/input.scss',
    data: '@use "sass:meta";\n\na {@include meta.load-css("plain")}\n',
  },
  {
    name: 'two_levels/plain.css',
    data: 'b {c {d: e}}\n',
  },
  {
    name: 'two_levels/output.css',
    data: 'a b {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'top_level_parent/input.scss',
    data: '@use "sass:meta";\n\na {@include meta.load-css("plain")}\n',
  },
  {
    name: 'top_level_parent/plain.css',
    data: '& {b {c: d}}\n',
  },
  {
    name: 'top_level_parent/output.css',
    data: 'a {\n  & {\n    b {\n      c: d;\n    }\n  }\n}\n',
  },
]
