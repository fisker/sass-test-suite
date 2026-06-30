// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/error/load.hrx

export default [
  {
    name: 'README.md',
    data: '`@forward` should load modules in the same way as `@use`, and as such should\nproduce the same errors when loading fails. We assume that they use shared\ninfrastructure, though, and as such only duplicate a few basic load tests for\n`@forward`.\n',
  },
  {
    name: 'missing/input.scss',
    data: '@forward "other";\n',
  },
  {
    name: 'missing/error',
    data: 'Error: Can\'t find stylesheet to import.\n  ,\n1 | @forward "other";\n  | ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'loop/forward_self/input.scss',
    data: '@forward "input";\n',
  },
  {
    name: 'loop/forward_self/error',
    data: 'Error: Module loop: this module is already being loaded.\n  ,\n1 | @forward "input";\n  | ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'loop/forward_to_forward/input.scss',
    data: '@forward "other";\n',
  },
  {
    name: 'loop/forward_to_forward/other.scss',
    data: '@forward "input";\n',
  },
  {
    name: 'loop/forward_to_forward/error',
    data: 'Error: Module loop: this module is already being loaded.\n  ,\n1 | @forward "input";\n  | ^^^^^^^^^^^^^^^^\n  \'\n  other.scss 1:1  @forward\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'loop/forward_to_use/input.scss',
    data: '@forward "other";\n',
  },
  {
    name: 'loop/forward_to_use/other.scss',
    data: '@use "input";\n',
  },
  {
    name: 'loop/forward_to_use/error',
    data: 'Error: Module loop: this module is already being loaded.\n  ,\n1 | @use "input";\n  | ^^^^^^^^^^^^\n  \'\n  other.scss 1:1  @forward\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'loop/forward_to_import/input.scss',
    data: '@forward "other";\n',
  },
  {
    name: 'loop/forward_to_import/other.scss',
    data: '@import "input";\n',
  },
  {
    name: 'loop/forward_to_import/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "input";\n  |         ^^^^^^^\n  \'\n    other.scss 1:9  @forward\n    input.scss 1:1  root stylesheet\n\nError: This file is already being loaded.\n  ,\n1 | @import "input";\n  |         ^^^^^^^\n  \'\n  other.scss 1:9  @forward\n  input.scss 1:1  root stylesheet\n',
  },
]
