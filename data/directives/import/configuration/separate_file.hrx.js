// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/configuration/separate_file.hrx

export default [
  {
    name: 'direct/input.scss',
    data: '@import "config";\n@import "midstream";\n',
  },
  {
    name: 'direct/_config.scss',
    data: '$a: configured;\n',
  },
  {
    name: 'direct/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'direct/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'direct/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'direct/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "config";\n  |         ^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'through_forward/input.scss',
    data: '// Regression test for sass/dart-sass#2641\n@import "config_wrapper";\n@import "midstream";\n',
  },
  {
    name: 'through_forward/_config_wrapper.scss',
    data: '@forward "config";\n',
  },
  {
    name: 'through_forward/_config.scss',
    data: '$a: configured;\n',
  },
  {
    name: 'through_forward/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'through_forward/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'through_forward/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'through_forward/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "config_wrapper";\n  |         ^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'nested/through_forward/input.scss',
    data: '// Regression test for sass/dart-sass#2641\na {\n  @import "config_wrapper";\n  @import "midstream";\n}\n',
  },
  {
    name: 'nested/through_forward/_config_wrapper.scss',
    data: '@forward "config";\n',
  },
  {
    name: 'nested/through_forward/_config.scss',
    data: '$a: configured;\n',
  },
  {
    name: 'nested/through_forward/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'nested/through_forward/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'nested/through_forward/output.css',
    data: 'a b {\n  c: configured;\n}\n',
  },
  {
    name: 'nested/through_forward/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 |   @import "config_wrapper";\n  |           ^^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:11  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 |   @import "midstream";\n  |           ^^^^^^^^^^^\n  \'\n    input.scss 4:11  root stylesheet\n',
  },
  {
    name: 'shadowing/through_forward/input.scss',
    data: '// Regression test for sass/dart-sass#2641\n$a: shadowed;\n@import "config_wrapper";\n@import "midstream";\n',
  },
  {
    name: 'shadowing/through_forward/_config_wrapper.scss',
    data: '@forward "config";\n',
  },
  {
    name: 'shadowing/through_forward/_config.scss',
    data: '$a: configured;\n',
  },
  {
    name: 'shadowing/through_forward/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'shadowing/through_forward/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'shadowing/through_forward/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'shadowing/through_forward/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "config_wrapper";\n  |         ^^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 4:9  root stylesheet\n',
  },
  {
    name: 'shadowing/nested/global/through_forward/input.scss',
    data: '// Regression test for sass/dart-sass#2641\n$a: shadowed;\na {\n  @import "config_wrapper";\n  @import "midstream";\n}\n',
  },
  {
    name: 'shadowing/nested/global/through_forward/_config_wrapper.scss',
    data: '@forward "config";\n',
  },
  {
    name: 'shadowing/nested/global/through_forward/_config.scss',
    data: '$a: configured;\n',
  },
  {
    name: 'shadowing/nested/global/through_forward/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'shadowing/nested/global/through_forward/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'shadowing/nested/global/through_forward/output.css',
    data: 'a b {\n  c: configured;\n}\n',
  },
  {
    name: 'shadowing/nested/global/through_forward/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 |   @import "config_wrapper";\n  |           ^^^^^^^^^^^^^^^^\n  \'\n    input.scss 4:11  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n5 |   @import "midstream";\n  |           ^^^^^^^^^^^\n  \'\n    input.scss 5:11  root stylesheet\n',
  },
  {
    name: 'shadowing/nested/local/through_forward/input.scss',
    data: '// Regression test for sass/dart-sass#2641\na {\n  $a: shadowed;\n  @import "config_wrapper";\n  @import "midstream";\n}\n',
  },
  {
    name: 'shadowing/nested/local/through_forward/_config_wrapper.scss',
    data: '@forward "config";\n',
  },
  {
    name: 'shadowing/nested/local/through_forward/_config.scss',
    data: '$a: configured;\n',
  },
  {
    name: 'shadowing/nested/local/through_forward/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'shadowing/nested/local/through_forward/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'shadowing/nested/local/through_forward/output.css',
    data: 'a b {\n  c: configured;\n}\n',
  },
  {
    name: 'shadowing/nested/local/through_forward/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 |   @import "config_wrapper";\n  |           ^^^^^^^^^^^^^^^^\n  \'\n    input.scss 4:11  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n5 |   @import "midstream";\n  |           ^^^^^^^^^^^\n  \'\n    input.scss 5:11  root stylesheet\n',
  },
]
