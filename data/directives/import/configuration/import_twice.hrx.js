// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/configuration/import_twice.hrx

export default [
  {
    name: 'no_change/input.scss',
    data: '$a: configured;\n@import "other";\n@import "other";\n',
  },
  {
    name: 'no_change/_other.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'no_change/_other.import.scss',
    data: '@forward "other";\n',
  },
  {
    name: 'no_change/output.css',
    data: 'b {\n  c: configured;\n}\n\nb {\n  c: configured;\n}\n',
  },
  {
    name: 'no_change/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'with_change/input.scss',
    data: '$a: configured;\n@import "other";\n$a: changed; // This should be ignored\n@import "other";\n',
  },
  {
    name: 'with_change/_other.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'with_change/_other.import.scss',
    data: '@forward "other";\n',
  },
  {
    name: 'with_change/output.css',
    data: 'b {\n  c: configured;\n}\n\nb {\n  c: configured;\n}\n',
  },
  {
    name: 'with_change/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 4:9  root stylesheet\n',
  },
  {
    name: 'still_changes_in_same_file/input.scss',
    data: '@import "other";\n$a: changed;\n@import "other";\n\nd {\n  e: $a;\n}\n',
  },
  {
    name: 'still_changes_in_same_file/_other.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'still_changes_in_same_file/_other.import.scss',
    data: '@forward "other";\n',
  },
  {
    name: 'still_changes_in_same_file/output.css',
    data: 'b {\n  c: original;\n}\n\nb {\n  c: original;\n}\n\nd {\n  e: changed;\n}\n',
  },
  {
    name: 'still_changes_in_same_file/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
]
