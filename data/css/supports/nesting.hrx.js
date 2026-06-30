// https://github.com/sass/sass-spec/blob/HEAD/spec/css/supports/nesting.hrx

export default [
  {
    name: 'style_rule/input.scss',
    data: 'a {\n  @supports (b: c) {d: e}\n}\n',
  },
  {
    name: 'style_rule/output.css',
    data: '@supports (b: c) {\n  a {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'supports/input.scss',
    data: '@supports (a: b) {\n  @supports (c: d) {\n    e {f: g}\n  }\n}\n',
  },
  {
    name: 'supports/output.css',
    data: '@supports (a: b) {\n  @supports (c: d) {\n    e {\n      f: g;\n    }\n  }\n}\n',
  },
  {
    name: 'media/top/input.scss',
    data: '@media screen {\n  @supports (a: b) {\n    c {d: e}\n  }\n}\n',
  },
  {
    name: 'media/top/output.css',
    data: '@media screen {\n  @supports (a: b) {\n    c {\n      d: e;\n    }\n  }\n}\n',
  },
  {
    name: 'media/in_style_rule/input.scss',
    data: 'c {\n  @media screen {\n    @supports (a: b) {d: e}\n  }\n}\n',
  },
  {
    name: 'media/in_style_rule/output.css',
    data: '@media screen {\n  @supports (a: b) {\n    c {\n      d: e;\n    }\n  }\n}\n',
  },
  {
    name: 'loud_comment/input.scss',
    data: '// Regression test for sass/libsass#2158\n\n@supports (a: b) {\n  /* c */\n  d {e: f}\n}\n',
  },
  {
    name: 'loud_comment/output.css',
    data: '@supports (a: b) {\n  /* c */\n  d {\n    e: f;\n  }\n}\n',
  },
  {
    name: 'empty/input.scss',
    data: '@supports (a: b) {}\n',
  },
  {
    name: 'empty/output.css',
    data: '',
  },
  {
    name: 'invisible/input.scss',
    data: '@supports (a: b) {\n  %c {d: e}\n}\n',
  },
  {
    name: 'invisible/output.css',
    data: '',
  },
]
