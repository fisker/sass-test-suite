// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/configuration/midstream_definition.hrx

export default [
  {
    name: 'with_config/input.scss',
    data: '$a: configured;\n@import "midstream";\n',
  },
  {
    name: 'with_config/_midstream.scss',
    data: '$a: midstream;\n@forward "upstream";\n',
  },
  {
    name: 'with_config/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'with_config/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'with_config/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'no_config/input.scss',
    data: '@import "midstream";\n',
  },
  {
    name: 'no_config/_midstream.scss',
    data: '$a: midstream;\n@forward "upstream";\n',
  },
  {
    name: 'no_config/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'no_config/output.css',
    data: 'b {\n  c: original;\n}\n',
  },
  {
    name: 'no_config/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
]
