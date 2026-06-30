// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/syntax/within.hrx

export default [
  {
    name: 'mixin/input.scss',
    data: '@mixin foo {\n  @use "other";\n}\n',
  },
  {
    name: 'mixin/error',
    data: 'Error: This at-rule is not allowed here.\n  ,\n2 |   @use "other";\n  |   ^^^^^^^^^^^^\n  \'\n  input.scss 2:3  root stylesheet\n',
  },
  {
    name: 'function/input.scss',
    data: '@function foo {\n  @use "other";\n}\n',
  },
  {
    name: 'function/error',
    data: 'Error: expected "(".\n  ,\n1 | @function foo {\n  |               ^\n  \'\n  input.scss 1:15  root stylesheet\n',
  },
  {
    name: 'style_rule/input.scss',
    data: 'a {\n  @use "other";\n}\n',
  },
  {
    name: 'style_rule/error',
    data: 'Error: This at-rule is not allowed here.\n  ,\n2 |   @use "other";\n  |   ^^^^^^^^^^^^\n  \'\n  input.scss 2:3  root stylesheet\n',
  },
]
