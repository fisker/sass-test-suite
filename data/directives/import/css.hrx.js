// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/css.hrx

export default [
  {
    name: 'unquoted/input.sass',
    data: '@import other.css\n',
  },
  {
    name: 'unquoted/output.css',
    data: '@import "other.css";\n',
  },
  {
    name: 'css_import_after_style_rule/input.scss',
    data: '// Regression test for sass/dart-sass#1628.\n@import "rule";\n@import "import";\n',
  },
  {
    name: 'css_import_after_style_rule/rule.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'css_import_after_style_rule/import.scss',
    data: '@use "sass:math";\n@import url(http://example.com);\n',
  },
  {
    name: 'css_import_after_style_rule/output.css',
    data: '@import url(http://example.com);\na {\n  b: c;\n}\n',
  },
  {
    name: 'css_import_after_style_rule/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "rule";\n  |         ^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "import";\n  |         ^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'sass/semicolon/input.sass',
    data: '@import url("a");\n',
  },
  {
    name: 'sass/semicolon/output.css',
    data: '@import url("a");\n',
  },
]
