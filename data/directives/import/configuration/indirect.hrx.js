// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/configuration/indirect.hrx

export default [
  {
    name: 'through_import/input.scss',
    data: '$a: configured;\n@import "midstream";\n',
  },
  {
    name: 'through_import/_midstream.scss',
    data: '@import "upstream";\n',
  },
  {
    name: 'through_import/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'through_import/_upstream.import.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'through_import/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "upstream";\n  |         ^^^^^^^^^^\n  \'\n    _midstream.scss 1:9  @import\n    input.scss 2:9       root stylesheet\n',
  },
  {
    name: 'through_forward/input.scss',
    data: '$a: configured;\n@import "midstream";\n',
  },
  {
    name: 'through_forward/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'through_forward/_midstream.import.scss',
    data: '@forward "midstream";\n',
  },
  {
    name: 'through_forward/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'through_forward/_upstream.import.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'through_forward/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'through_forward/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
]
