export default [
  {
    name: 'before/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'before/plain.css',
    data: 'a {\n  b: c;\n  d {e: f}\n}\n',
  },
  {
    name: 'before/output.css',
    data: 'a {\n  b: c;\n  d {\n    e: f;\n  }\n}\n',
  },
  {
    name: 'after/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'after/plain.css',
    data: 'a {\n  b {c: d}\n  e: f;\n}\n',
  },
  {
    name: 'after/output.css',
    data: 'a {\n  b {\n    c: d;\n  }\n  e: f;\n}\n',
  },
  {
    name: 'both/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'both/plain.css',
    data: 'a {\n  b: c;\n  d {e: f}\n  g: h;\n}\n',
  },
  {
    name: 'both/output.css',
    data: 'a {\n  b: c;\n  d {\n    e: f;\n  }\n  g: h;\n}\n',
  },
]
