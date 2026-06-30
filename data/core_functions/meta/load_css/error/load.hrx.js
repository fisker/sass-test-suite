export default [
  {
    name: 'README.md',
    data: 'This mixin should load modules in the same way as the `@use` rule. To avoid tons\nof duplicated tests, we just test a couple basic error cases.\n',
  },
  {
    name: 'missing/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n',
  },
  {
    name: 'missing/error',
    data: 'Error: Can\'t find stylesheet to import.\n  ,\n2 | @include meta.load-css("other");\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'loop/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n',
  },
  {
    name: 'loop/_other.scss',
    data: '@use "sass:meta";\n@include meta.load-css("input");\n',
  },
  {
    name: 'loop/error',
    data: 'Error: Module loop: input.scss is already being loaded.\n  ,\n2 | @include meta.load-css("input");\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  _other.scss 2:1  load-css()\n  input.scss 2:1   root stylesheet\n',
  },
  {
    name: 'top_level_include_declaration/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("upstream");\n',
  },
  {
    name: 'top_level_include_declaration/_upstream.scss',
    data: '@mixin a { b: c }\n@include a;\n',
  },
  {
    name: 'top_level_include_declaration/error',
    data: "Error: Declarations may only be used within style rules.\n  ,\n1 | @mixin a { b: c }\n  |            ^^^^^\n  '\n  _upstream.scss 1:12  a()\n  _upstream.scss 2:1   load-css()\n  input.scss 2:1       root stylesheet\n",
  },
  {
    name: 'nested/without_use/input.scss',
    data: "@use 'sass:meta';\n.a {\n  @include meta.load-css('upstream');\n}\n",
  },
  {
    name: 'nested/without_use/_upstream.scss',
    data: '@mixin b { c: d }\n@include b;\n',
  },
  {
    name: 'nested/without_use/error',
    data: "Error: Declarations may only be used within style rules.\n  ,\n1 | @mixin b { c: d }\n  |            ^^^^^\n  '\n  _upstream.scss 1:12  b()\n  _upstream.scss 2:1   load-css()\n  input.scss 3:3       root stylesheet\n",
  },
  {
    name: 'nested/with_use/input.scss',
    data: "@use 'sass:meta';\n.a {\n  @include meta.load-css('midstream');\n}\n",
  },
  {
    name: 'nested/with_use/_midstream.scss',
    data: "@use 'upstream';\n@mixin b { c: d }\n@include b;\n",
  },
  {
    name: 'nested/with_use/_upstream.scss',
    data: '// Intentionally empty.\n',
  },
  {
    name: 'nested/with_use/error',
    data: "Error: Declarations may only be used within style rules.\n  ,\n2 | @mixin b { c: d }\n  |            ^^^^^\n  '\n  _midstream.scss 2:12  b()\n  _midstream.scss 3:1   load-css()\n  input.scss 3:3        root stylesheet\n",
  },
]
