// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/configuration/prefixed_as.hrx

export default [
  {
    name: 'input.scss',
    data: '$d-a: configured;\n@import "midstream";\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream" as d-*;\n',
  },
  {
    name: '_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
]
