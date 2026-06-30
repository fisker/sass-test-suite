export default [
  {
    name: 'nested/variable/input.scss',
    data: 'a {@import "midstream"}\n\nb {c: $d}\n',
  },
  {
    name: 'nested/variable/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'nested/variable/_upstream.scss',
    data: '$d: e;\n',
  },
  {
    name: 'nested/variable/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "midstream"}\n  |            ^^^^^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n\nError: Undefined variable.\n  ,\n3 | b {c: $d}\n  |       ^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'nested/mixin/input.scss',
    data: 'a {@import "midstream"}\n\nb {@include c}\n',
  },
  {
    name: 'nested/mixin/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'nested/mixin/_upstream.scss',
    data: '@mixin c {d: e}\n',
  },
  {
    name: 'nested/mixin/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "midstream"}\n  |            ^^^^^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n\nError: Undefined mixin.\n  ,\n3 | b {@include c}\n  |    ^^^^^^^^^^\n  \'\n  input.scss 3:4  root stylesheet\n',
  },
  {
    name: 'nested/function/input.scss',
    data: 'a {@import "midstream"}\n\nb {c: d()}\n',
  },
  {
    name: 'nested/function/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'nested/function/_upstream.scss',
    data: '@function d() {@return e}\n',
  },
  {
    name: 'nested/function/output.css',
    data: 'b {\n  c: d();\n}\n',
  },
  {
    name: 'nested/function/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "midstream"}\n  |            ^^^^^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
]
