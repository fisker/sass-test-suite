export default [
  {
    name: 'input.scss',
    data: 'a {\n  $a: configured;\n  @import "midstream";\n}\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: '_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'a b {\n  c: configured;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 |   @import "midstream";\n  |           ^^^^^^^^^^^\n  \'\n    input.scss 3:11  root stylesheet\n',
  },
]
