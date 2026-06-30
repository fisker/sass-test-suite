export default [
  {
    name: 'README.md',
    data: '`@forward` should handle extensions in the same way as `@use`. We assume that\nthey use shared infrastructure, though, and as such only test basic cases.\n',
  },
  {
    name: 'upstream/input.scss',
    data: '@use "midstream";\n\nin-input {@extend in-upstream}\n',
  },
  {
    name: 'upstream/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'upstream/_upstream.scss',
    data: 'in-upstream {a: b}\n',
  },
  {
    name: 'upstream/output.css',
    data: 'in-upstream, in-input {\n  a: b;\n}\n',
  },
  {
    name: 'forward_into_use/input.scss',
    data: '@use "midstream";\n\nin-input {@extend in-used}\n',
  },
  {
    name: 'forward_into_use/_midstream.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'forward_into_use/_forwarded.scss',
    data: '@use "used";\n',
  },
  {
    name: 'forward_into_use/_used.scss',
    data: 'in-used {a: b}\n',
  },
  {
    name: 'forward_into_use/output.css',
    data: 'in-used, in-input {\n  a: b;\n}\n',
  },
  {
    name: 'forward_into_import/input.scss',
    data: '@use "midstream";\n\nin-input {@extend in-imported}\n',
  },
  {
    name: 'forward_into_import/_midstream.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'forward_into_import/_forwarded.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'forward_into_import/_imported.scss',
    data: 'in-imported {a: b}\n',
  },
  {
    name: 'forward_into_import/output.css',
    data: 'in-imported, in-input {\n  a: b;\n}\n',
  },
  {
    name: 'forward_into_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _forwarded.scss 1:9  @forward\n    _midstream.scss 1:1  @use\n    input.scss 1:1       root stylesheet\n',
  },
]
