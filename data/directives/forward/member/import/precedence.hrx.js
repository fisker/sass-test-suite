// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/member/import/precedence.hrx

export default [
  {
    name: 'README.md',
    data: 'Forwarded definitions take precedence over local definitions through imports, to\nmatch the behavior of definitions written directly in the imported file.\n',
  },
  {
    name: 'top_level/input.scss',
    data: '$a: in-input;\n\n@import "midstream";\n\nb {c: $a}\n',
  },
  {
    name: 'top_level/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'top_level/_upstream.scss',
    data: '$a: in-upstream;\n',
  },
  {
    name: 'top_level/output.css',
    data: 'b {\n  c: in-upstream;\n}\n',
  },
  {
    name: 'top_level/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'nested/input.scss',
    data: 'b {\n  $a: in-input;\n\n  @import "midstream";\n\n  c: $a;\n}\n',
  },
  {
    name: 'nested/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'nested/_upstream.scss',
    data: '$a: in-upstream;\n',
  },
  {
    name: 'nested/output.css',
    data: 'b {\n  c: in-upstream;\n}\n',
  },
  {
    name: 'nested/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 |   @import "midstream";\n  |           ^^^^^^^^^^^\n  \'\n    input.scss 4:11  root stylesheet\n',
  },
]
