// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/load.hrx

export default [
  {
    name: 'explicit_extension/sass/input.scss',
    data: '@import "other.sass"\n',
  },
  {
    name: 'explicit_extension/sass/other.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'explicit_extension/sass/other.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'explicit_extension/sass/other.css',
    data: 'a {syntax: css}\n',
  },
  {
    name: 'explicit_extension/sass/output.css',
    data: 'a {\n  syntax: sass;\n}\n',
  },
  {
    name: 'explicit_extension/sass/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other.sass"\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'explicit_extension/scss/input.scss',
    data: '@import "other.scss"\n',
  },
  {
    name: 'explicit_extension/scss/other.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'explicit_extension/scss/other.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'explicit_extension/scss/other.css',
    data: 'a {syntax: css}\n',
  },
  {
    name: 'explicit_extension/scss/output.css',
    data: 'a {\n  syntax: scss;\n}\n',
  },
  {
    name: 'explicit_extension/scss/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other.scss"\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'precedence/scss_before_css/input.scss',
    data: '@import "other";\n',
  },
  {
    name: 'precedence/scss_before_css/other.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'precedence/scss_before_css/other.css',
    data: 'a {syntax: css}\n',
  },
  {
    name: 'precedence/scss_before_css/output.css',
    data: 'a {\n  syntax: scss;\n}\n',
  },
  {
    name: 'precedence/scss_before_css/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'precedence/sass_before_css/input.scss',
    data: '@import "other";\n',
  },
  {
    name: 'precedence/sass_before_css/other.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'precedence/sass_before_css/other.css',
    data: 'a {syntax: css}\n',
  },
  {
    name: 'precedence/sass_before_css/output.css',
    data: 'a {\n  syntax: sass;\n}\n',
  },
  {
    name: 'precedence/sass_before_css/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'precedence/normal_before_index/input.scss',
    data: '@import "dir";\n',
  },
  {
    name: 'precedence/normal_before_index/dir.scss',
    data: 'a {index: false}\n',
  },
  {
    name: 'precedence/normal_before_index/dir/index.scss',
    data: 'a {index: true}\n',
  },
  {
    name: 'precedence/normal_before_index/output.css',
    data: 'a {\n  index: false;\n}\n',
  },
  {
    name: 'precedence/normal_before_index/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "dir";\n  |         ^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'precedence/import_only/implicit_extension/input.scss',
    data: '// The extension of the import-only file doesn\'t need to match the extension of\n// the use-only file.\n@import "other";\n',
  },
  {
    name: 'precedence/import_only/implicit_extension/other.import.sass',
    data: 'a\n  import-only: true\n',
  },
  {
    name: 'precedence/import_only/implicit_extension/other.scss',
    data: 'a {import-only: false}\n',
  },
  {
    name: 'precedence/import_only/implicit_extension/output.css',
    data: 'a {\n  import-only: true;\n}\n',
  },
  {
    name: 'precedence/import_only/implicit_extension/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'precedence/import_only/explicit_extension/input.scss',
    data: '@import "other";\n',
  },
  {
    name: 'precedence/import_only/explicit_extension/other.import.scss',
    data: 'a {import-only: true}\n',
  },
  {
    name: 'precedence/import_only/explicit_extension/other.scss',
    data: 'a {import-only: false}\n',
  },
  {
    name: 'precedence/import_only/explicit_extension/output.css',
    data: 'a {\n  import-only: true;\n}\n',
  },
  {
    name: 'precedence/import_only/explicit_extension/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'precedence/import_only/partial_before_normal/input.scss',
    data: '// An import-only partial takes precedence over a normal non-import-only file.\n@import "other";\n',
  },
  {
    name: 'precedence/import_only/partial_before_normal/_other.import.scss',
    data: 'a {import-only: true}\n',
  },
  {
    name: 'precedence/import_only/partial_before_normal/other.scss',
    data: 'a {import-only: false}\n',
  },
  {
    name: 'precedence/import_only/partial_before_normal/output.css',
    data: 'a {\n  import-only: true;\n}\n',
  },
  {
    name: 'precedence/import_only/partial_before_normal/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'precedence/import_only/normal_before_partial/input.scss',
    data: '// A normal import-only file takes precedence over a non-import-only partial.\n@import "other";\n',
  },
  {
    name: 'precedence/import_only/normal_before_partial/other.import.scss',
    data: 'a {import-only: true}\n',
  },
  {
    name: 'precedence/import_only/normal_before_partial/_other.scss',
    data: 'a {import-only: false}\n',
  },
  {
    name: 'precedence/import_only/normal_before_partial/output.css',
    data: 'a {\n  import-only: true;\n}\n',
  },
  {
    name: 'precedence/import_only/normal_before_partial/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'precedence/import_only/before_index/input.scss',
    data: '// A non-index import-only file takes precedence over an index file.\n@import "other";\n',
  },
  {
    name: 'precedence/import_only/before_index/other.import.scss',
    data: 'a {import-only: true}\n',
  },
  {
    name: 'precedence/import_only/before_index/other/index.scss',
    data: 'a {import-only: false}\n',
  },
  {
    name: 'precedence/import_only/before_index/output.css',
    data: 'a {\n  import-only: true;\n}\n',
  },
  {
    name: 'precedence/import_only/before_index/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'precedence/import_only/index/input.scss',
    data: '// A import-only index file takes precedence over a normal index file.\n@import "other";\n',
  },
  {
    name: 'precedence/import_only/index/other/index.import.scss',
    data: 'a {import-only: true}\n',
  },
  {
    name: 'precedence/import_only/index/other/index.scss',
    data: 'a {import-only: false}\n',
  },
  {
    name: 'precedence/import_only/index/output.css',
    data: 'a {\n  import-only: true;\n}\n',
  },
  {
    name: 'precedence/import_only/index/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'precedence/import_only/index_after_normal/input.scss',
    data: '// Index files, even import-only ones, always come after non-index files.\n@import "other";\n',
  },
  {
    name: 'precedence/import_only/index_after_normal/other.scss',
    data: 'a {import-only: false}\n',
  },
  {
    name: 'precedence/import_only/index_after_normal/other/index.import.scss',
    data: 'a {import-only: true}\n',
  },
  {
    name: 'precedence/import_only/index_after_normal/output.css',
    data: 'a {\n  import-only: false;\n}\n',
  },
  {
    name: 'precedence/import_only/index_after_normal/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'index/scss/input.scss',
    data: '@import "dir";\n',
  },
  {
    name: 'index/scss/dir/index.scss',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/scss/output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/scss/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "dir";\n  |         ^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'index/sass/input.scss',
    data: '@import "dir";\n',
  },
  {
    name: 'index/sass/dir/index.sass',
    data: '.foo \n  a: b\n',
  },
  {
    name: 'index/sass/output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/sass/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "dir";\n  |         ^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'index/partial/input.scss',
    data: '@import "dir";\n',
  },
  {
    name: 'index/partial/dir/_index.scss',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/partial/output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/partial/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "dir";\n  |         ^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'index/dir_dot_foo/input.scss',
    data: '@import "dir.foo";\n',
  },
  {
    name: 'index/dir_dot_foo/dir.foo/index.scss',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/dir_dot_foo/output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/dir_dot_foo/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "dir.foo";\n  |         ^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'index/dir_dot_scss/input.scss',
    data: '@import "dir.scss";\n',
  },
  {
    name: 'index/dir_dot_scss/dir.scss/index.scss',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/dir_dot_scss/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "dir.scss";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: Can\'t find stylesheet to import.\n  ,\n1 | @import "dir.scss";\n  |         ^^^^^^^^^^\n  \'\n  input.scss 1:9  root stylesheet\n',
  },
]
