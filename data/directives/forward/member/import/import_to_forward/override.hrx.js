export default [
  {
    name: 'override/README.md',
    data: 'Regression tests for sass/dart-sass#888.\n',
  },
  {
    name: 'override/variable/input.scss',
    data: '@import "midstream1";\nafter-first {a: $b}\n\n@import "midstream2";\nafter-second {a: $b}\n',
  },
  {
    name: 'override/variable/_midstream1.scss',
    data: '@forward "upstream1";\n',
  },
  {
    name: 'override/variable/_upstream1.scss',
    data: '$b: 1;\n',
  },
  {
    name: 'override/variable/_midstream2.scss',
    data: '@forward "upstream2";\n',
  },
  {
    name: 'override/variable/_upstream2.scss',
    data: '$b: 2;\n',
  },
  {
    name: 'override/variable/output.css',
    data: 'after-first {\n  a: 1;\n}\n\nafter-second {\n  a: 2;\n}\n',
  },
  {
    name: 'override/variable/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream1";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 | @import "midstream2";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 4:9  root stylesheet\n',
  },
  {
    name: 'override/mixin/input.scss',
    data: '@import "midstream1";\nafter-first {@include a}\n\n@import "midstream2";\nafter-second {@include a}\n',
  },
  {
    name: 'override/mixin/_midstream1.scss',
    data: '@forward "upstream1";\n',
  },
  {
    name: 'override/mixin/_upstream1.scss',
    data: '@mixin a {b: 1};\n',
  },
  {
    name: 'override/mixin/_midstream2.scss',
    data: '@forward "upstream2";\n',
  },
  {
    name: 'override/mixin/_upstream2.scss',
    data: '@mixin a {b: 2};\n',
  },
  {
    name: 'override/mixin/output.css',
    data: 'after-first {\n  b: 1;\n}\n\nafter-second {\n  b: 2;\n}\n',
  },
  {
    name: 'override/mixin/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream1";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 | @import "midstream2";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 4:9  root stylesheet\n',
  },
  {
    name: 'override/function/input.scss',
    data: '@import "midstream1";\nafter-first {a: b()}\n\n@import "midstream2";\nafter-second {a: b()}\n',
  },
  {
    name: 'override/function/_midstream1.scss',
    data: '@forward "upstream1";\n',
  },
  {
    name: 'override/function/_upstream1.scss',
    data: '@function b() {@return 1};\n',
  },
  {
    name: 'override/function/_midstream2.scss',
    data: '@forward "upstream2";\n',
  },
  {
    name: 'override/function/_upstream2.scss',
    data: '@function b() {@return 2};\n',
  },
  {
    name: 'override/function/output.css',
    data: 'after-first {\n  a: 1;\n}\n\nafter-second {\n  a: 2;\n}\n',
  },
  {
    name: 'override/function/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream1";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 | @import "midstream2";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 4:9  root stylesheet\n',
  },
]
