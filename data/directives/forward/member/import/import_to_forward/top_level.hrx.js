// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/member/import/import_to_forward/top_level.hrx

export default [
  {
    name: 'mixin/input.scss',
    data: '@import "midstream";\n\n@include a;\n',
  },
  {
    name: 'mixin/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'mixin/_upstream.scss',
    data: '@mixin a() {b {c: d}}\n',
  },
  {
    name: 'mixin/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'mixin/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'variable_assignment/input.scss',
    data: '@import "midstream";\n\n$a: new value;\n\nb {c: get-a()}\n',
  },
  {
    name: 'variable_assignment/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'variable_assignment/_upstream.scss',
    data: '$a: old value;\n\n@function get-a() {@return $a}\n',
  },
  {
    name: 'variable_assignment/output.css',
    data: 'b {\n  c: new value;\n}\n',
  },
  {
    name: 'variable_assignment/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'variable_use/input.scss',
    data: '@import "midstream";\n\na {b: $c}\n',
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
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'post_facto/without_use/input.scss',
    data: '@import "other";\n@import "midstream";\n\n@include a;\n',
  },
  {
    name: 'post_facto/without_use/_other.scss',
    data: '@mixin a {b {c: $d}}\n',
  },
  {
    name: 'post_facto/without_use/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'post_facto/without_use/_upstream.scss',
    data: '$d: e;\n',
  },
  {
    name: 'post_facto/without_use/output.css',
    data: 'b {\n  c: e;\n}\n',
  },
  {
    name: 'post_facto/without_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'post_facto/with_use/input.scss',
    data: '@import "other";\n@import "midstream";\n\n@include a;\n',
  },
  {
    name: 'post_facto/with_use/_other.scss',
    data: '@use "sass:math";\n\n@mixin a {b {c: $d}}\n',
  },
  {
    name: 'post_facto/with_use/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'post_facto/with_use/_upstream.scss',
    data: '$d: e;\n',
  },
  {
    name: 'post_facto/with_use/output.css',
    data: 'b {\n  c: e;\n}\n',
  },
  {
    name: 'post_facto/with_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
]
