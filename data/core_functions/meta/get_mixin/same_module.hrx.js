export default [
  {
    name: 'user_defined/input.scss',
    data: '@use "sass:meta";\n@mixin add-two($v) {b: $v + 2}\n$add-two-mixin: meta.get-mixin(add-two);\n\na {@include meta.apply($add-two-mixin, 10)}\n',
  },
  {
    name: 'user_defined/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'redefined/input.scss',
    data: '@use "sass:meta";\n@mixin add-two($v) {b: $v + 2}\n$add-two-mixin: meta.get-mixin(add-two);\n\n// The mixin returned by `meta.get-mixin()` is locked in place when it\'s\n// called. Redefining the mixin after the fact shouldn\'t affect the stored\n// value.\n@mixin add-two($v) {@error "Should not be called"}\n\na {@include meta.apply($add-two-mixin, 10)}\n',
  },
  {
    name: 'redefined/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'through_import/input.scss',
    data: '@use "sass:meta";\n@import "other";\na {@include meta.apply(meta.get-mixin(add-two), 10)}\n',
  },
  {
    name: 'through_import/other.scss',
    data: '@mixin add-two($v) {b: $v + 2}\n',
  },
  {
    name: 'through_import/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'dash_insensitive/dash_to_underscore/input.scss',
    data: '@use "sass:meta";\n@mixin add_two($v) {b: $v + 2}\n\na {@include meta.apply(meta.get-mixin(add-two), 10)}\n',
  },
  {
    name: 'dash_insensitive/dash_to_underscore/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'dash_insensitive/underscore_to_dash/input.scss',
    data: '@use "sass:meta";\n@mixin add-two($v) {b: $v + 2}\n\na {@include meta.apply(meta.get-mixin(add_two), 10)}\n',
  },
  {
    name: 'dash_insensitive/underscore_to_dash/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
]
