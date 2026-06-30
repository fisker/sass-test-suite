// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/css.hrx

export default [
  {
    name: 'README.md',
    data: '`@forward` should handle CSS in the same way as `@use`. We assume that they use\nshared infrastructure, though, and as such only test basic cases.\n',
  },
  {
    name: 'forward_only/input.scss',
    data: '@forward "other";\n',
  },
  {
    name: 'forward_only/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'forward_only/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'once/multiple_forwards/input.scss',
    data: '@forward "other";\n@forward "other";\n@forward "other";\n',
  },
  {
    name: 'once/multiple_forwards/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'once/multiple_forwards/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'once/forward_and_use/input.scss',
    data: '@forward "other";\n@use "other";\n',
  },
  {
    name: 'once/forward_and_use/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'once/forward_and_use/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'order/input.scss',
    data: '@forward "other1";\n@use "other2";\n@forward "other3";\n\na {file: input}\n',
  },
  {
    name: 'order/_other1.scss',
    data: 'a {file: other1}\n',
  },
  {
    name: 'order/_other2.scss',
    data: 'a {file: other2}\n',
  },
  {
    name: 'order/_other3.scss',
    data: 'a {file: other3}\n',
  },
  {
    name: 'order/output.css',
    data: 'a {\n  file: other1;\n}\n\na {\n  file: other2;\n}\n\na {\n  file: other3;\n}\n\na {\n  file: input;\n}\n',
  },
  {
    name: 'forward_into_import/input.scss',
    data: '@forward "forwarded";\n\nin-input {a: b}\n',
  },
  {
    name: 'forward_into_import/_forwarded.scss',
    data: '@import "imported";\n\nin-forwarded {a: b}\n',
  },
  {
    name: 'forward_into_import/_imported.scss',
    data: 'in-imported {a: b}\n',
  },
  {
    name: 'forward_into_import/output.css',
    data: 'in-imported {\n  a: b;\n}\n\nin-forwarded {\n  a: b;\n}\n\nin-input {\n  a: b;\n}\n',
  },
  {
    name: 'forward_into_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _forwarded.scss 1:9  @forward\n    input.scss 1:1       root stylesheet\n',
  },
]
