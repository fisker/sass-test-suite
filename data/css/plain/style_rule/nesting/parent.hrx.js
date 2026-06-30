// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/style_rule/nesting/parent.hrx

export default [
  {
    name: 'only/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'only/plain.css',
    data: 'a {& {b: c}}\n',
  },
  {
    name: 'only/output.css',
    data: 'a {\n  & {\n    b: c;\n  }\n}\n',
  },
  {
    name: 'start/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'start/plain.css',
    data: 'a {&.b {c: d}}\n',
  },
  {
    name: 'start/output.css',
    data: 'a {\n  &.b {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'mid/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'mid/plain.css',
    data: 'a {.b&.c {d: e}}\n',
  },
  {
    name: 'mid/output.css',
    data: 'a {\n  .b&.c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'end/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'end/plain.css',
    data: 'a {.b& {c: d}}\n',
  },
  {
    name: 'end/output.css',
    data: 'a {\n  .b& {\n    c: d;\n  }\n}\n',
  },
]
