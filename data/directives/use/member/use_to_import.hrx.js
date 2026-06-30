// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/member/use_to_import.hrx

export default [
  {
    name: 'variable_use/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$member}\n',
  },
  {
    name: 'variable_use/midstream.scss',
    data: '@import "upstream";\n',
  },
  {
    name: 'variable_use/upstream.scss',
    data: '$member: value;\n',
  },
  {
    name: 'variable_use/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'variable_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "upstream";\n  |         ^^^^^^^^^^\n  \'\n    midstream.scss 1:9  @use\n    input.scss 1:1      root stylesheet\n',
  },
  {
    name: 'variable_assignment/input.scss',
    data: '@use "midstream";\n\nmidstream.$member: new value;\n\na {b: midstream.get-member()}\n',
  },
  {
    name: 'variable_assignment/midstream.scss',
    data: '@import "upstream";\n',
  },
  {
    name: 'variable_assignment/upstream.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'variable_assignment/output.css',
    data: 'a {\n  b: new value;\n}\n',
  },
  {
    name: 'variable_assignment/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "upstream";\n  |         ^^^^^^^^^^\n  \'\n    midstream.scss 1:9  @use\n    input.scss 1:1      root stylesheet\n',
  },
  {
    name: 'function/input.scss',
    data: '@use "midstream";\n\na {b: midstream.member()}\n',
  },
  {
    name: 'function/midstream.scss',
    data: '@import "upstream";\n',
  },
  {
    name: 'function/upstream.scss',
    data: '@function member() {@return value}\n',
  },
  {
    name: 'function/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'function/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "upstream";\n  |         ^^^^^^^^^^\n  \'\n    midstream.scss 1:9  @use\n    input.scss 1:1      root stylesheet\n',
  },
  {
    name: 'mixin/input.scss',
    data: '@use "midstream";\n\n@include midstream.member;\n',
  },
  {
    name: 'mixin/midstream.scss',
    data: '@import "upstream";\n',
  },
  {
    name: 'mixin/upstream.scss',
    data: '@mixin member() {a {b: c}}\n',
  },
  {
    name: 'mixin/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'mixin/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "upstream";\n  |         ^^^^^^^^^^\n  \'\n    midstream.scss 1:9  @use\n    input.scss 1:1      root stylesheet\n',
  },
]
