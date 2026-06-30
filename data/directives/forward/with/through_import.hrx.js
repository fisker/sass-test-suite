// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/through_import.hrx

export default [
  {
    name: 'direct/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'direct/_downstream.scss',
    data: '@forward "midstream" with ($a: configured);\n',
  },
  {
    name: 'direct/_midstream.scss',
    data: '@import "upstream";\n',
  },
  {
    name: 'direct/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'direct/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'direct/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "upstream";\n  |         ^^^^^^^^^^\n  \'\n    _midstream.scss 1:9   @forward\n    _downstream.scss 1:1  @use\n    input.scss 1:1        root stylesheet\n',
  },
  {
    name: 'transitive/input.scss',
    data: '@use "used";\n',
  },
  {
    name: 'transitive/_used.scss',
    data: '@forward "forwarded" with ($a: configured);\n',
  },
  {
    name: 'transitive/_forwarded.scss',
    data: '@import "imported_downstream";\n',
  },
  {
    name: 'transitive/_imported_downstream.scss',
    data: '@import "imported_upstream";\n',
  },
  {
    name: 'transitive/_imported_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'transitive/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'transitive/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported_downstream";\n  |         ^^^^^^^^^^^^^^^^^^^^^\n  \'\n    _forwarded.scss 1:9  @forward\n    _used.scss 1:1       @use\n    input.scss 1:1       root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported_upstream";\n  |         ^^^^^^^^^^^^^^^^^^^\n  \'\n    _imported_downstream.scss 1:9  @import\n    _forwarded.scss 1:9            @forward\n    _used.scss 1:1                 @use\n    input.scss 1:1                 root stylesheet\n',
  },
]
