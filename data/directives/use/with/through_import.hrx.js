// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/with/through_import.hrx

export default [
  {
    name: 'direct/input.scss',
    data: '@use "used" with ($a: configured);\n',
  },
  {
    name: 'direct/_used.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'direct/_imported.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'direct/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'direct/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'transitive/input.scss',
    data: '@use "used" with ($a: configured);\n',
  },
  {
    name: 'transitive/_used.scss',
    data: '@import "midstream";\n',
  },
  {
    name: 'transitive/_midstream.scss',
    data: '@import "upstream";\n',
  },
  {
    name: 'transitive/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'transitive/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'transitive/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "upstream";\n  |         ^^^^^^^^^^\n  \'\n    _midstream.scss 1:9  @import\n    _used.scss 1:9       @use\n    input.scss 1:1       root stylesheet\n',
  },
]
