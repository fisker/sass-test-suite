export default [
  {
    name: 'transitive/variable/input.scss',
    data: '@import "downstream";\n\na {b: $c}\n',
  },
  {
    name: 'transitive/variable/_downstream.scss',
    data: '@import "midstream";\n',
  },
  {
    name: 'transitive/variable/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'transitive/variable/_upstream.scss',
    data: '$c: d;\n',
  },
  {
    name: 'transitive/variable/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'transitive/variable/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "downstream";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    _downstream.scss 1:9  @import\n    input.scss 1:9        root stylesheet\n',
  },
  {
    name: 'transitive/mixin/input.scss',
    data: '@import "downstream";\n\na {@include b}\n',
  },
  {
    name: 'transitive/mixin/_downstream.scss',
    data: '@import "midstream";\n',
  },
  {
    name: 'transitive/mixin/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'transitive/mixin/_upstream.scss',
    data: '@mixin b {c: d}\n',
  },
  {
    name: 'transitive/mixin/output.css',
    data: 'a {\n  c: d;\n}\n',
  },
  {
    name: 'transitive/mixin/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "downstream";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    _downstream.scss 1:9  @import\n    input.scss 1:9        root stylesheet\n',
  },
  {
    name: 'transitive/function/input.scss',
    data: '@import "downstream";\n\na {b: c()}\n',
  },
  {
    name: 'transitive/function/_downstream.scss',
    data: '@import "midstream";\n',
  },
  {
    name: 'transitive/function/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'transitive/function/_upstream.scss',
    data: '@function c() {@return d}\n',
  },
  {
    name: 'transitive/function/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'transitive/function/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "downstream";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    _downstream.scss 1:9  @import\n    input.scss 1:9        root stylesheet\n',
  },
]
