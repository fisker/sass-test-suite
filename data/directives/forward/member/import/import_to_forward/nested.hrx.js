// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/member/import/import_to_forward/nested.hrx

export default [
  {
    name: 'mixin/input.scss',
    data: 'a {\n  @import "midstream";\n\n  @include b;\n}\n',
  },
  {
    name: 'mixin/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'mixin/_upstream.scss',
    data: '@mixin b() {c: d}\n',
  },
  {
    name: 'mixin/output.css',
    data: 'a {\n  c: d;\n}\n',
  },
  {
    name: 'mixin/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import "midstream";\n  |           ^^^^^^^^^^^\n  \'\n    input.scss 2:11  root stylesheet\n',
  },
  {
    name: 'variable_assignment/input.scss',
    data: 'a {\n  @import "midstream";\n\n  $b: new value;\n  c: get-b();\n}\n',
  },
  {
    name: 'variable_assignment/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'variable_assignment/_upstream.scss',
    data: '$b: old value;\n\n@function get-b() {@return $b}\n',
  },
  {
    name: 'variable_assignment/output.css',
    data: 'a {\n  c: new value;\n}\n',
  },
  {
    name: 'variable_assignment/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import "midstream";\n  |           ^^^^^^^^^^^\n  \'\n    input.scss 2:11  root stylesheet\n',
  },
  {
    name: 'variable_use/input.scss',
    data: 'a {\n  @import "midstream";\n\n  b: $c;\n}\n',
  },
  {
    name: 'variable_use/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'variable_use/_upstream.scss',
    data: '$c: d;\n',
  },
  {
    name: 'variable_use/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'variable_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import "midstream";\n  |           ^^^^^^^^^^^\n  \'\n    input.scss 2:11  root stylesheet\n',
  },
]
