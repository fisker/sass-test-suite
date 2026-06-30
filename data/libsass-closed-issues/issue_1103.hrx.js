// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1103.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "import";\n\n@media screen and (min-width: 1) {\n    foo { bar: baz }\n    baz { bar: foo }\n}\n\n@media screen and (min-width: 1) {\n    @import "import";\n}\n',
  },
  {
    name: '_import.scss',
    data: 'foo { bar: baz }\nbaz { bar: foo }\n\n@media screen and (max-width: 2) {\n    foo { bar: baz }\n    baz { bar: foo }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n}\n\nbaz {\n  bar: foo;\n}\n\n@media screen and (max-width: 2) {\n  foo {\n    bar: baz;\n  }\n  baz {\n    bar: foo;\n  }\n}\n@media screen and (min-width: 1) {\n  foo {\n    bar: baz;\n  }\n  baz {\n    bar: foo;\n  }\n}\n@media screen and (min-width: 1) {\n  foo {\n    bar: baz;\n  }\n  baz {\n    bar: foo;\n  }\n}\n@media screen and (min-width: 1) and (max-width: 2) {\n  foo {\n    bar: baz;\n  }\n  baz {\n    bar: foo;\n  }\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "import";\n  |         ^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n9 |     @import "import";\n  |             ^^^^^^^^\n  \'\n    input.scss 9:13  root stylesheet\n',
  },
]
