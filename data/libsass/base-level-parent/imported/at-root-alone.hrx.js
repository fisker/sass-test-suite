// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/imported/at-root-alone.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "include.scss";',
  },
  {
    name: 'include.scss',
    data: '@at-root {\n  & {\n    foo {\n      bar: baz;\n    }\n  }\n}',
  },
  {
    name: 'output.css',
    data: '& foo {\n  bar: baz;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "include.scss";\n  |         ^^^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
]
