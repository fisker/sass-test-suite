export default [
  {
    name: 'with_no_use/input.scss',
    data: 'a {\n  @import "other";\n}\n',
  },
  {
    name: 'with_no_use/other.scss',
    data: '@at-root {\n  b {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'with_no_use/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'with_no_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import "other";\n  |           ^^^^^^^\n  \'\n    input.scss 2:11  root stylesheet\n',
  },
  {
    name: 'with_builtin_use/input.scss',
    data: 'a {\n  @import "other";\n}\n',
  },
  {
    name: 'with_builtin_use/other.scss',
    data: '@use "sass:math";\n\n@at-root {\n  b {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'with_builtin_use/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'with_builtin_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import "other";\n  |           ^^^^^^^\n  \'\n    input.scss 2:11  root stylesheet\n',
  },
  {
    name: 'with_user_use/options.yml',
    data: ':todo:\n  - sass/dart-sass#1347\n',
  },
  {
    name: 'with_user_use/input.scss',
    data: 'a {\n  @import "other";\n}\n',
  },
  {
    name: 'with_user_use/other.scss',
    data: '@use "used";\n\n@at-root {\n  b {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'with_user_use/used.scss',
    data: '// nothing\n',
  },
  {
    name: 'with_user_use/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
]
