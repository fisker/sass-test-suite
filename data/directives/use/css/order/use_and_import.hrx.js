// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/css/order/use_and_import.hrx

export default [
  {
    name: 'use_into_use/import_above_rule/input.scss',
    data: '@use "midstream";\n\n@import "input.css";\n',
  },
  {
    name: 'use_into_use/import_above_rule/_midstream.scss',
    data: '@use "upstream";\n\n@import "midstream.css";\n\na {file: midstream}\n',
  },
  {
    name: 'use_into_use/import_above_rule/_upstream.scss',
    data: '@import "upstream.css";\n\na {file: upstream}\n',
  },
  {
    name: 'use_into_use/import_above_rule/output.css',
    data: '@import "upstream.css";\n@import "midstream.css";\n@import "input.css";\n\na {\n  file: upstream;\n}\n\na {\n  file: midstream;\n}\n',
  },
  {
    name: 'use_into_use/import_below_rule/input.scss',
    data: '@use "midstream";\n\n@import "input.css";\n',
  },
  {
    name: 'use_into_use/import_below_rule/_midstream.scss',
    data: '@use "upstream";\n\na {file: midstream}\n\n@import "midstream.css";\n',
  },
  {
    name: 'use_into_use/import_below_rule/_upstream.scss',
    data: 'a {file: upstream}\n\n@import "upstream.css";\n',
  },
  {
    name: 'use_into_use/import_below_rule/output.css',
    data: '@import "upstream.css";\n@import "midstream.css";\n@import "input.css";\n\na {\n  file: upstream;\n}\n\na {\n  file: midstream;\n}\n',
  },
  {
    name: 'use_into_import/css_import_above_rule/input.scss',
    data: '@use "used";\n\n@import "input.css";\n',
  },
  {
    name: 'use_into_import/css_import_above_rule/_used.scss',
    data: '@import "imported";\n\n@import "used.css";\n\na {file: used}\n',
  },
  {
    name: 'use_into_import/css_import_above_rule/_imported.scss',
    data: '@import "imported.css";\n\na {file: imported}\n',
  },
  {
    name: 'use_into_import/css_import_above_rule/output.css',
    data: '@import "imported.css";\n@import "used.css";\n@import "input.css";\na {\n  file: imported;\n}\n\na {\n  file: used;\n}\n',
  },
  {
    name: 'use_into_import/css_import_above_rule/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'use_into_import/css_import_below_rule/input.scss',
    data: '@use "used";\n\n@import "input.css";\n',
  },
  {
    name: 'use_into_import/css_import_below_rule/_used.scss',
    data: '@import "imported";\n\na {file: used}\n\n@import "used.css";\n',
  },
  {
    name: 'use_into_import/css_import_below_rule/_imported.scss',
    data: 'a {file: imported}\n\n@import "imported.css";\n',
  },
  {
    name: 'use_into_import/css_import_below_rule/output.css',
    data: '@import "imported.css";\n@import "used.css";\n@import "input.css";\na {\n  file: imported;\n}\n\na {\n  file: used;\n}\n',
  },
  {
    name: 'use_into_import/css_import_below_rule/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'use_into_import/sass_import_below_css_import/input.scss',
    data: '@use "used";\n\n@import "input.css";\n',
  },
  {
    name: 'use_into_import/sass_import_below_css_import/_used.scss',
    data: '@import "used.css";\n\n@import "imported";\n',
  },
  {
    name: 'use_into_import/sass_import_below_css_import/_imported.scss',
    data: '@import "imported.css";\n',
  },
  {
    name: 'use_into_import/sass_import_below_css_import/output.css',
    data: '@import "used.css";\n@import "imported.css";\n@import "input.css";\n',
  },
  {
    name: 'use_into_import/sass_import_below_css_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 3:9  @use\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'import_into_use/css_import_above_rule/input.scss',
    data: '@import "imported";\n\n@import "input.css";\n',
  },
  {
    name: 'import_into_use/css_import_above_rule/_imported.scss',
    data: '@use "used";\n\n@import "imported.css";\n\na {file: imported}\n',
  },
  {
    name: 'import_into_use/css_import_above_rule/_used.scss',
    data: '@import "used.css";\n\na {file: used}\n',
  },
  {
    name: 'import_into_use/css_import_above_rule/output.css',
    data: '@import "used.css";\n@import "imported.css";\n@import "input.css";\na {\n  file: used;\n}\n\na {\n  file: imported;\n}\n',
  },
  {
    name: 'import_into_use/css_import_above_rule/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'import_into_use/css_import_below_rule/input.scss',
    data: '@import "imported";\n\n@import "input.css";\n',
  },
  {
    name: 'import_into_use/css_import_below_rule/_imported.scss',
    data: '@use "used";\n\na {file: imported}\n\n@import "imported.css";\n',
  },
  {
    name: 'import_into_use/css_import_below_rule/_used.scss',
    data: 'a {file: used}\n\n@import "used.css";\n',
  },
  {
    name: 'import_into_use/css_import_below_rule/output.css',
    data: '@import "used.css";\n@import "imported.css";\n@import "input.css";\na {\n  file: used;\n}\n\na {\n  file: imported;\n}\n',
  },
  {
    name: 'import_into_use/css_import_below_rule/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'import_into_use/sass_import_below_css_import/input.scss',
    data: '@import "input.css";\n\n@import "imported";\n',
  },
  {
    name: 'import_into_use/sass_import_below_css_import/_imported.scss',
    data: '@use "used";\n\n@import "imported.css";\n',
  },
  {
    name: 'import_into_use/sass_import_below_css_import/_used.scss',
    data: '@import "used.css";\n',
  },
  {
    name: 'import_into_use/sass_import_below_css_import/output.css',
    data: '@import "input.css";\n@import "used.css";\n@import "imported.css";\n',
  },
  {
    name: 'import_into_use/sass_import_below_css_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'comments_and_imports/input.scss',
    data: '/* input comment before use */\n@use "midstream";\n\n/* input comment before import */\n@import "input.css";\n\n/* input comment after import */\n',
  },
  {
    name: 'comments_and_imports/midstream.scss',
    data: '/* midstream comment before use */\n@use "upstream";\n\n/* midstream comment before first import */\n@import "midstream1.css";\n\n/* midstream comment before second import */\n@import "midstream2.css";\n\n/* midstream comment after imports */\n\na {file: midstream}\n',
  },
  {
    name: 'comments_and_imports/upstream.scss',
    data: '/* upstream comment before import */\n@import "upstream.css";\n\n/* upstream comment after import */\n',
  },
  {
    name: 'comments_and_imports/output.css',
    data: '/* input comment before use */\n/* midstream comment before use */\n/* upstream comment before import */\n@import "upstream.css";\n/* midstream comment before first import */\n@import "midstream1.css";\n/* midstream comment before second import */\n@import "midstream2.css";\n/* input comment before import */\n@import "input.css";\n/* upstream comment after import */\n/* midstream comment after imports */\na {\n  file: midstream;\n}\n\n/* input comment after import */\n',
  },
]
