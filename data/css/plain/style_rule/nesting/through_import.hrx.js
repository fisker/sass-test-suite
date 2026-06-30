// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/style_rule/nesting/through_import.hrx

export default [
  {
    name: 'one_level/input.scss',
    data: 'a {@import "plain"}\n',
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
    name: 'one_level/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "plain"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'two_levels/input.scss',
    data: 'a {@import "plain"}\n',
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
    name: 'two_levels/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "plain"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'top_level_parent/input.scss',
    data: 'a {@import "plain"}\n',
  },
  {
    name: 'top_level_parent/plain.css',
    data: '& {b {c: d}}\n',
  },
  {
    name: 'top_level_parent/output.css',
    data: 'a {\n  & {\n    b {\n      c: d;\n    }\n  }\n}\n',
  },
  {
    name: 'top_level_parent/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "plain"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
]
