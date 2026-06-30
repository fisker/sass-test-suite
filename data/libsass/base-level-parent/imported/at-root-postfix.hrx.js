// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/imported/at-root-postfix.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "include.scss";',
  },
  {
    name: 'include.scss',
    data: '@at-root {\n  &post {\n    foo {\n      bar: baz;\n    }\n  }\n}',
  },
  {
    name: 'error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "include.scss";\n  |         ^^^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: A top-level selector may not contain a parent selector with a suffix.\n  ,\n2 |   &post {\n  |   ^^^^^\n  \'\n  include.scss 2:3  @import\n  input.scss 1:9    root stylesheet\n',
  },
]
