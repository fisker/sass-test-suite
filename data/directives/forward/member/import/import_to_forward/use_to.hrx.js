export default [
  {
    name: 'mixin/input.scss',
    data: '@use "used";\n\n@include used.a;\n',
  },
  {
    name: 'mixin/_used.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'mixin/_imported.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'mixin/_forwarded.scss',
    data: '@mixin a() {b {c: d}}\n',
  },
  {
    name: 'mixin/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'mixin/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'variable_assignment/input.scss',
    data: '@use "used";\n\nused.$a: new value;\n\nb {c: used.get-a()}\n',
  },
  {
    name: 'variable_assignment/_used.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'variable_assignment/_imported.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'variable_assignment/_forwarded.scss',
    data: '$a: old value;\n\n@function get-a() {@return $a}\n',
  },
  {
    name: 'variable_assignment/output.css',
    data: 'b {\n  c: new value;\n}\n',
  },
  {
    name: 'variable_assignment/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'variable_use/input.scss',
    data: '@use "used";\n\na {b: used.$c}\n',
  },
  {
    name: 'variable_use/_used.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'variable_use/_imported.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'variable_use/_forwarded.scss',
    data: '$c: d;\n',
  },
  {
    name: 'variable_use/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'variable_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n',
  },
]
