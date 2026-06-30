// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/extend/upstream.hrx

export default [
  {
    name: 'near/input.scss',
    data: '@use "other";\n\nin-input {@extend in-other}\n',
  },
  {
    name: 'near/_other.scss',
    data: 'in-other {x: y}\n',
  },
  {
    name: 'near/output.css',
    data: 'in-other, in-input {\n  x: y;\n}\n',
  },
  {
    name: 'far/input.scss',
    data: '@use "midstream";\n\nin-input {@extend in-upstream}\n',
  },
  {
    name: 'far/_midstream.scss',
    data: '@use "upstream";\n',
  },
  {
    name: 'far/_upstream.scss',
    data: 'in-upstream {x: y}\n',
  },
  {
    name: 'far/output.css',
    data: 'in-upstream, in-input {\n  x: y;\n}\n',
  },
  {
    name: 'placeholder/input.scss',
    data: '@use "other";\n\nin-input {@extend %in-other}\n',
  },
  {
    name: 'placeholder/_other.scss',
    data: '%in-other {x: y}\n',
  },
  {
    name: 'placeholder/output.css',
    data: 'in-input {\n  x: y;\n}\n',
  },
  {
    name: 'double/input.scss',
    data: '// Regression test for sass/dart-sass#1393\n@use "other";\n\ndownstream {@extend upstream}\n',
  },
  {
    name: 'double/_other.scss',
    data: 'upstream {a: b}\ndownstream {@extend upstream}\n',
  },
  {
    name: 'double/output.css',
    data: 'upstream, downstream {\n  a: b;\n}\n',
  },
  {
    name: 'compound_through_import/input.scss',
    data: '@import "downstream";\n',
  },
  {
    name: 'compound_through_import/README.md',
    data: 'Regression test for https://github.com/sass/dart-sass/issues/2616\n',
  },
  {
    name: 'compound_through_import/_downstream.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'compound_through_import/_midstream.scss',
    data: '@use "upstream";\n\n.a {\n  @extend %b;\n}\n',
  },
  {
    name: 'compound_through_import/_upstream.scss',
    data: '%b.c {\n  d: e;\n}\n',
  },
  {
    name: 'compound_through_import/output.css',
    data: '.c.a {\n  d: e;\n}\n',
  },
  {
    name: 'compound_through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "downstream";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
]
