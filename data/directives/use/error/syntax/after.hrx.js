export default [
  {
    name: 'at_rule/unknown/input.scss',
    data: '@fblthp;\n@use "other";\n',
  },
  {
    name: 'at_rule/unknown/error',
    data: 'Error: @use rules must be written before any other rules.\n  ,\n2 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'at_rule/sass/input.scss',
    data: '@if true {};\n@use "other";\n',
  },
  {
    name: 'at_rule/sass/error',
    data: 'Error: @use rules must be written before any other rules.\n  ,\n2 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'at_rule/import/input.scss',
    data: '@import "other1";\n@use "other2";\n',
  },
  {
    name: 'at_rule/import/error',
    data: 'Error: @use rules must be written before any other rules.\n  ,\n2 | @use "other2";\n  | ^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'at_rule/css/input.scss',
    data: '@keyframes foo {};\n@use "other";\n',
  },
  {
    name: 'at_rule/css/error',
    data: 'Error: @use rules must be written before any other rules.\n  ,\n2 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'style_rule/input.scss',
    data: 'a {};\n@use "other";\n',
  },
  {
    name: 'style_rule/error',
    data: 'Error: @use rules must be written before any other rules.\n  ,\n2 | @use "other";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'indented/mixin/input.sass',
    data: '=mixin\n  a: b\n@use "other"\n',
  },
  {
    name: 'indented/mixin/error',
    data: 'Error: @use rules must be written before any other rules.\n  ,\n3 | @use "other"\n  | ^^^^^^^^^^^^\n  \'\n  input.sass 3:1  root stylesheet\n',
  },
  {
    name: 'indented/include/input.sass',
    data: '+mixin\n@use "other"\n',
  },
  {
    name: 'indented/include/error',
    data: 'Error: @use rules must be written before any other rules.\n  ,\n2 | @use "other"\n  | ^^^^^^^^^^^^\n  \'\n  input.sass 2:1  root stylesheet\n',
  },
]
