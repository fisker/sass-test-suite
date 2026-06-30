// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/load.hrx

export default [
  {
    name: 'unknown_scheme/input.scss',
    data: '@use "scheme:bar";\n',
  },
  {
    name: 'unknown_scheme/error',
    data: 'Error: Can\'t find stylesheet to import.\n  ,\n1 | @use "scheme:bar";\n  | ^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'no_extension/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'no_extension/other',
    data: 'a {b: c}\n',
  },
  {
    name: 'no_extension/error',
    data: 'Error: Can\'t find stylesheet to import.\n  ,\n1 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'missing/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'missing/error',
    data: 'Error: Can\'t find stylesheet to import.\n  ,\n1 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'dir_dot_scss/input.scss',
    data: '@use "dir.scss";\n',
  },
  {
    name: 'dir_dot_scss/dir.scss/index.scss',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'dir_dot_scss/error',
    data: 'Error: Can\'t find stylesheet to import.\n  ,\n1 | @use "dir.scss";\n  | ^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'conflict/partial/input.scss',
    data: '// This import can\'t be resolved because it could refer to either the partial or\n// the non-partial file.\n@use "other";\n',
  },
  {
    name: 'conflict/partial/_other.scss',
    data: 'a {partial: true}\n',
  },
  {
    name: 'conflict/partial/other.scss',
    data: 'a {partial: false}\n',
  },
  {
    name: 'conflict/partial/error',
    data: 'Error: It\'s not clear which file to import. Found:\n  _other.scss\n  other.scss\n  ,\n3 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'conflict/extension/sass_and_scss/input.scss',
    data: '// This import can\'t be resolved because it could refer to either the ".sass" or\n// ".scss" file.\n@use "other";\n',
  },
  {
    name: 'conflict/extension/sass_and_scss/other.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'conflict/extension/sass_and_scss/other.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'conflict/extension/sass_and_scss/error',
    data: 'Error: It\'s not clear which file to import. Found:\n  other.sass\n  other.scss\n  ,\n3 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'conflict/all/input.scss',
    data: '// This import can\'t be resolved because it has conflicting partials *and*\n// conflicting extensions.\n@use "other";\n',
  },
  {
    name: 'conflict/all/other.sass',
    data: 'a\n  syntax: sass\n  partial: false\n',
  },
  {
    name: 'conflict/all/other.scss',
    data: 'a {syntax: scss; partial: false}\n',
  },
  {
    name: 'conflict/all/other.css',
    data: 'a {syntax: css; partial: false}\n',
  },
  {
    name: 'conflict/all/_other.sass',
    data: 'a\n  syntax: sass\n  partial: true\n',
  },
  {
    name: 'conflict/all/_other.scss',
    data: 'a {syntax: scss; partial: true}\n',
  },
  {
    name: 'conflict/all/_other.css',
    data: 'a {syntax: css; partial: true}\n',
  },
  {
    name: 'conflict/all/error',
    data: 'Error: It\'s not clear which file to import. Found:\n  _other.sass\n  other.sass\n  _other.scss\n  other.scss\n  ,\n3 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'conflict/index/input.scss',
    data: '// This import can\'t be resolved because it could refer to either the partial or\n// the non-partial index file.\n@use "other";\n',
  },
  {
    name: 'conflict/index/other/_index.scss',
    data: 'a {partial: true}\n',
  },
  {
    name: 'conflict/index/other/index.scss',
    data: 'a {partial: false}\n',
  },
  {
    name: 'conflict/index/error',
    data: 'Error: It\'s not clear which file to import. Found:\n  other/_index.scss\n  other/index.scss\n  ,\n3 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'loop/use_self/input.scss',
    data: '@use "input";\n',
  },
  {
    name: 'loop/use_self/error',
    data: 'Error: Module loop: this module is already being loaded.\n  ,\n1 | @use "input";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'loop/use_to_use/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'loop/use_to_use/other.scss',
    data: '@use "input";\n',
  },
  {
    name: 'loop/use_to_use/error',
    data: 'Error: Module loop: this module is already being loaded.\n  ,\n1 | @use "input";\n  | ^^^^^^^^^^^^\n  \'\n  other.scss 1:1  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'loop/use_to_import/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'loop/use_to_import/other.scss',
    data: '@import "input";\n',
  },
  {
    name: 'loop/use_to_import/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "input";\n  |         ^^^^^^^\n  \'\n    other.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n\nError: This file is already being loaded.\n  ,\n1 | @import "input";\n  |         ^^^^^^^\n  \'\n  other.scss 1:9  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'loop/import_to_use/input.scss',
    data: '@import "other";\n',
  },
  {
    name: 'loop/import_to_use/other.scss',
    data: '@use "input";\n',
  },
  {
    name: 'loop/import_to_use/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: Module loop: this module is already being loaded.\n  ,\n1 | @use "input";\n  | ^^^^^^^^^^^^\n  \'\n  other.scss 1:1  @import\n  input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'conflicting_namespace/explicit/input.scss',
    data: '@use "other1" as other;\n@use "other2" as other;\n',
  },
  {
    name: 'conflicting_namespace/explicit/other1.scss',
    data: '',
  },
  {
    name: 'conflicting_namespace/explicit/other2.scss',
    data: '',
  },
  {
    name: 'conflicting_namespace/explicit/error',
    data: 'Error: There\'s already a module with namespace "other".\n  ,\n1 | @use "other1" as other;\n  | ====================== original @use\n2 | @use "other2" as other;\n  | ^^^^^^^^^^^^^^^^^^^^^^ new @use\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'conflicting_namespace/implicit/input.scss',
    data: '@use "dir1/other";\n@use "dir2/other";\n',
  },
  {
    name: 'conflicting_namespace/implicit/dir1/other.scss',
    data: '',
  },
  {
    name: 'conflicting_namespace/implicit/dir2/other.scss',
    data: '',
  },
  {
    name: 'conflicting_namespace/implicit/error',
    data: 'Error: There\'s already a module with namespace "other".\n  ,\n1 | @use "dir1/other";\n  | ================= original @use\n2 | @use "dir2/other";\n  | ^^^^^^^^^^^^^^^^^ new @use\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'conflicting_namespace/built_in/input.scss',
    data: '// Regression test for sass/dart-sass#1047\n@use "sass:math";\n@use "sass:math";\n',
  },
  {
    name: 'conflicting_namespace/built_in/error',
    data: 'Error: There\'s already a module with namespace "math".\n  ,\n2 | @use "sass:math";\n  | ================ original @use\n3 | @use "sass:math";\n  | ^^^^^^^^^^^^^^^^ new @use\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'conflicting_namespace/mixed/input.scss',
    data: '@use "other";\n@use "other2" as other;\n',
  },
  {
    name: 'conflicting_namespace/mixed/other.scss',
    data: '',
  },
  {
    name: 'conflicting_namespace/mixed/other2.scss',
    data: '',
  },
  {
    name: 'conflicting_namespace/mixed/error',
    data: 'Error: There\'s already a module with namespace "other".\n  ,\n1 | @use "other";\n  | ============ original @use\n2 | @use "other2" as other;\n  | ^^^^^^^^^^^^^^^^^^^^^^ new @use\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'top_level_include_declaration/upstream_mixin/input.scss',
    data: '@use "upstream";\n@include upstream.a;\n',
  },
  {
    name: 'top_level_include_declaration/upstream_mixin/_upstream.scss',
    data: '@mixin a { b: c }\n',
  },
  {
    name: 'top_level_include_declaration/upstream_mixin/error',
    data: "Error: Declarations may only be used within style rules.\n  ,\n1 | @mixin a { b: c }\n  |            ^^^^^\n  '\n  _upstream.scss 1:12  a()\n  input.scss 2:1       root stylesheet\n",
  },
  {
    name: 'top_level_include_declaration/input_mixin/input.scss',
    data: "@use 'upstream';\n@mixin a { b: c }\n@include a;\n",
  },
  {
    name: 'top_level_include_declaration/input_mixin/_upstream.scss',
    data: '// Intentionally empty.\n',
  },
  {
    name: 'top_level_include_declaration/input_mixin/error',
    data: "Error: Declarations may only be used within style rules.\n  ,\n2 | @mixin a { b: c }\n  |            ^^^^^\n  '\n  input.scss 2:12  a()\n  input.scss 3:1   root stylesheet\n",
  },
]
