// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/imported/basic-prefix-itpl.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "include.scss";',
  },
  {
    name: 'include.scss',
    data: 'pre#{&} {\r\n  foo {\r\n    bar: baz;\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'pre foo {\n  bar: baz;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "include.scss";\n  |         ^^^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
]
