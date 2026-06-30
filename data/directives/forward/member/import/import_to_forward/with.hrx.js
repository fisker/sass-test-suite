export default [
  {
    name: 'default/input.scss',
    data: '@import "midstream";\n\na {b: get-c()};\n',
  },
  {
    name: 'default/_midstream.scss',
    data: '@forward "upstream" with ($c: midstream);\n',
  },
  {
    name: 'default/_upstream.scss',
    data: '$c: upstream !default;\n\n@function get-c() {@return $c}\n',
  },
  {
    name: 'default/output.css',
    data: 'a {\n  b: midstream;\n}\n',
  },
  {
    name: 'default/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'non_overridable/input.scss',
    data: '$a: input;\n\n@import "midstream";\n\nb {c: get-a()};\n',
  },
  {
    name: 'non_overridable/_midstream.scss',
    data: '@forward "upstream" with ($a: midstream);\n',
  },
  {
    name: 'non_overridable/_upstream.scss',
    data: '$a: upstream !default;\n\n@function get-a() {@return $a}\n',
  },
  {
    name: 'non_overridable/output.css',
    data: 'b {\n  c: midstream;\n}\n',
  },
  {
    name: 'non_overridable/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'overridden/input.scss',
    data: '$a: input;\n\n@import "midstream";\n\nb {c: get-a()};\n',
  },
  {
    name: 'overridden/_midstream.scss',
    data: '@forward "upstream" with ($a: midstream !default);\n',
  },
  {
    name: 'overridden/_upstream.scss',
    data: '$a: upstream !default;\n\n@function get-a() {@return $a}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'b {\n  c: input;\n}\n',
  },
  {
    name: 'overridden/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
]
