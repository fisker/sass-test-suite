// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/error/conflict.hrx

export default [
  {
    name: 'partial/input.scss',
    data: '// This import can\'t be resolved because it could refer to either the partial or\n// the non-partial file.\n@import "other";\n',
  },
  {
    name: 'partial/_other.scss',
    data: 'a {partial: true}\n',
  },
  {
    name: 'partial/other.scss',
    data: 'a {partial: false}\n',
  },
  {
    name: 'partial/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n\nError: It\'s not clear which file to import. Found:\n  _other.scss\n  other.scss\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n  input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'extension/input.scss',
    data: '// This import can\'t be resolved because it could refer to either the ".sass" or\n// ".scss" file.\n@import "other";\n',
  },
  {
    name: 'extension/other.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'extension/other.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'extension/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n\nError: It\'s not clear which file to import. Found:\n  other.sass\n  other.scss\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n  input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'all/input.scss',
    data: '// This import can\'t be resolved because it has conflicting partials *and*\n// conflicting extensions.\n@import "other";\n',
  },
  {
    name: 'all/other.sass',
    data: 'a\n  syntax: sass\n  partial: false\n',
  },
  {
    name: 'all/other.scss',
    data: 'a {syntax: scss; partial: false}\n',
  },
  {
    name: 'all/_other.sass',
    data: 'a\n  syntax: sass\n  partial: true\n',
  },
  {
    name: 'all/_other.scss',
    data: 'a {syntax: scss; partial: true}\n',
  },
  {
    name: 'all/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n\nError: It\'s not clear which file to import. Found:\n  _other.sass\n  other.sass\n  _other.scss\n  other.scss\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n  input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'index/input.scss',
    data: '// This import can\'t be resolved because it could refer to either the partial or\n// the non-partial index file.\n@import "other";\n',
  },
  {
    name: 'index/other/_index.scss',
    data: 'a {partial: true}\n',
  },
  {
    name: 'index/other/index.scss',
    data: 'a {partial: false}\n',
  },
  {
    name: 'index/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n\nError: It\'s not clear which file to import. Found:\n  other/_index.scss\n  other/index.scss\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n  input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'import_only/no_extension/input.scss',
    data: '// This import can\'t be resolved because it could refer to either the Sass or\n// the SCSS import-only file.\n@import "other";\n',
  },
  {
    name: 'import_only/no_extension/other.import.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'import_only/no_extension/other.import.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'import_only/no_extension/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n\nError: It\'s not clear which file to import. Found:\n  other.import.sass\n  other.import.scss\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n  input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'import_only/with_extension/input.scss',
    data: '// This import can\'t be resolved because it could refer to either the partial or\n// the non-partial.\n@import "other.scss";\n',
  },
  {
    name: 'import_only/with_extension/other.import.scss',
    data: 'a {partial: false}\n',
  },
  {
    name: 'import_only/with_extension/_other.import.scss',
    data: 'a {partial: true}\n',
  },
  {
    name: 'import_only/with_extension/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other.scss";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n\nError: It\'s not clear which file to import. Found:\n  _other.import.scss\n  other.import.scss\n  ,\n3 | @import "other.scss";\n  |         ^^^^^^^^^^^^\n  \'\n  input.scss 3:9  root stylesheet\n',
  },
]
