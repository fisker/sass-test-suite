export default [
  {
    name: 'no_extension/input.scss',
    data: '@import "other";\n',
  },
  {
    name: 'no_extension/other',
    data: 'a {b: c}\n',
  },
  {
    name: 'no_extension/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: Can\'t find stylesheet to import.\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n  input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'directory_dot_import/input.scss',
    data: '// Import-only file extensions only apply to individual files, not to\n// directories.\n@import "other";\n',
  },
  {
    name: 'directory_dot_import/other.import/index.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'directory_dot_import/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n\nError: Can\'t find stylesheet to import.\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n  input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'parent_relative/input.scss',
    data: '// A file in a subdirectory shouldn\'t be able to load a URL relative\n// to the importing file.\n// Regression test for scssphp/scssphp#242\n@import "dir/child"\n',
  },
  {
    name: 'parent_relative/sibling.scss',
    data: 'a {b: ""}\n',
  },
  {
    name: 'parent_relative/dir/child.scss',
    data: '@import "sibling"\n',
  },
  {
    name: 'parent_relative/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 | @import "dir/child"\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 4:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "sibling"\n  |         ^^^^^^^^^\n  \'\n    dir/child.scss 1:9  @import\n    input.scss 4:9      root stylesheet\n\nError: Can\'t find stylesheet to import.\n  ,\n1 | @import "sibling"\n  |         ^^^^^^^^^\n  \'\n  dir/child.scss 1:9  @import\n  input.scss 4:9      root stylesheet\n',
  },
]
