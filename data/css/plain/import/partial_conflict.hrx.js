// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/import/partial_conflict.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "plain";\n',
  },
  {
    name: '_plain.css',
    data: 'plain {partial: true}\n',
  },
  {
    name: 'plain.css',
    data: 'plain {partial: false}\n',
  },
  {
    name: 'error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "plain";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: It\'s not clear which file to import. Found:\n  _plain.css\n  plain.css\n  ,\n1 | @import "plain";\n  |         ^^^^^^^\n  \'\n  input.scss 1:9  root stylesheet\n',
  },
]
