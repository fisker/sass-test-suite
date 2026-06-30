export default [
  {
    name: 'bubble/rules/input.scss',
    data: 'a {\n  b: c;\n  @font-face { d: e }\n}\n',
  },
  {
    name: 'bubble/rules/output.css',
    data: 'a {\n  b: c;\n}\n@font-face {\n  d: e;\n}\n',
  },
  {
    name: 'bubble/empty/input.scss',
    data: 'a {\n  @font-face {/**/}\n}\n',
  },
  {
    name: 'bubble/empty/output.css',
    data: '@font-face { /**/ }\n',
  },
  {
    name: 'bubble/in-mixin/input.scss',
    data: '@mixin a {\n  @font-face { b: c }\n}\nd {\n  e: f;\n  @include a;\n}\n',
  },
  {
    name: 'bubble/in-mixin/output.css',
    data: 'd {\n  e: f;\n}\n@font-face {\n  b: c;\n}\n',
  },
  {
    name: 'bubble/deeply-nested/input.scss',
    data: 'a { b { c { @font-face { e: f } g: h; } } }\n',
  },
  {
    name: 'bubble/deeply-nested/output.css',
    data: '@font-face {\n  e: f;\n}\na b c {\n  g: h;\n}\n',
  },
  {
    name: 'bubble/loaded/import/input.scss',
    data: "c {\n  @import 'upstream';\n  d: e;\n}\n",
  },
  {
    name: 'bubble/loaded/import/upstream.scss',
    data: '@font-face { a: b }\n',
  },
  {
    name: 'bubble/loaded/import/output.css',
    data: '@font-face {\n  a: b;\n}\nc {\n  d: e;\n}\n',
  },
  {
    name: 'bubble/loaded/import/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import 'upstream';\n  |           ^^^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n",
  },
  {
    name: 'bubble/loaded/meta-load-css/input.scss',
    data: "@use 'sass:meta';\n\nc {\n  @include meta.load-css('upstream');\n  d: e;\n}\n",
  },
  {
    name: 'bubble/loaded/meta-load-css/upstream.scss',
    data: '@font-face { a: b }\n',
  },
  {
    name: 'bubble/loaded/meta-load-css/output.css',
    data: '@font-face {\n  a: b;\n}\nc {\n  d: e;\n}\n',
  },
]
