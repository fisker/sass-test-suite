// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/error/member.hrx

export default [
  {
    name: 'inaccessible/nested/variable/input.scss',
    data: 'a {@import "other"}\n\nb {c: $d}\n',
  },
  {
    name: 'inaccessible/nested/variable/_other.scss',
    data: '$d: e;\n',
  },
  {
    name: 'inaccessible/nested/variable/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "other"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n\nError: Undefined variable.\n  ,\n3 | b {c: $d}\n  |       ^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'inaccessible/nested/mixin/input.scss',
    data: 'a {@import "other"}\n\nb {@include c}\n',
  },
  {
    name: 'inaccessible/nested/mixin/_other.scss',
    data: '@mixin c() {d: e};\n',
  },
  {
    name: 'inaccessible/nested/mixin/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "other"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n\nError: Undefined mixin.\n  ,\n3 | b {@include c}\n  |    ^^^^^^^^^^\n  \'\n  input.scss 3:4  root stylesheet\n',
  },
  {
    name: 'inaccessible/nested/function/input.scss',
    data: 'a {@import "other"}\n\nb {c: d()}\n',
  },
  {
    name: 'inaccessible/nested/function/_other.scss',
    data: '@function d() {@return e}\n',
  },
  {
    name: 'inaccessible/nested/function/output.css',
    data: 'b {\n  c: d();\n}\n',
  },
  {
    name: 'inaccessible/nested/function/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "other"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
]
