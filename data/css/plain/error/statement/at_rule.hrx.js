// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/error/statement/at_rule.hrx

export default [
  {
    name: 'at_root/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'at_root/plain.css',
    data: 'a {\n  @at-root b {\n    x: y;\n  }\n}\n',
  },
  {
    name: 'at_root/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n2 |   @at-root b {\n  |   ^^^^^^^^^^^\n  '\n  plain.css 2:3   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'content/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'content/plain.css',
    data: '@content;\n',
  },
  {
    name: 'content/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @content;\n  | ^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'debug/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'debug/plain.css',
    data: '@debug foo;\n',
  },
  {
    name: 'debug/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @debug foo;\n  | ^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'each/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'each/plain.css',
    data: '@each $i in 1 2 3 {\n  a {\n    x: y;\n  }\n}\n',
  },
  {
    name: 'each/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @each $i in 1 2 3 {\n  | ^^^^^^^^^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'error/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'error/plain.css',
    data: '@error foo;\n',
  },
  {
    name: 'error/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @error foo;\n  | ^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'extend/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'extend/plain.css',
    data: 'a {\n  @extend b;\n}\n',
  },
  {
    name: 'extend/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n2 |   @extend b;\n  |   ^^^^^^^^^\n  '\n  plain.css 2:3   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'for/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'for/plain.css',
    data: '@for $i from 1 to 5 {\n  a {\n    x: y;\n  }\n}\n',
  },
  {
    name: 'for/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @for $i from 1 to 5 {\n  | ^^^^^^^^^^^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'function/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'function/plain.css',
    data: '@function foo() {\n  @return 1;\n}\n',
  },
  {
    name: 'function/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @function foo() {\n  | ^^^^^^^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'if/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'if/plain.css',
    data: '@if true {\n  a {\n    x: y;\n  }\n}\n',
  },
  {
    name: 'if/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @if true {\n  | ^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'import/interpolated/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'import/interpolated/plain.css',
    data: '@import url("foo#{bar}baz");\n',
  },
  {
    name: 'import/interpolated/error',
    data: 'Error: Interpolation isn\'t allowed in plain CSS.\n  ,\n1 | @import url("foo#{bar}baz");\n  |                 ^^^^^^\n  \'\n  plain.css 1:17  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'import/nested/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'import/nested/plain.css',
    data: 'a {\n  @import "foo";\n}\n',
  },
  {
    name: 'import/nested/output.css',
    data: 'a {\n  @import "foo";\n}\n',
  },
  {
    name: 'import/multi/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'import/multi/plain.css',
    data: '@import "foo", "bar";\n',
  },
  {
    name: 'import/multi/error',
    data: 'Error: expected ";".\n  ,\n1 | @import "foo", "bar";\n  |              ^\n  \'\n  plain.css 1:14  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'include/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'include/plain.css',
    data: '@include foo;\n',
  },
  {
    name: 'include/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @include foo;\n  | ^^^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'mixin/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'mixin/plain.css',
    data: '@mixin foo {\n  a {\n    x: y;\n  }\n}\n',
  },
  {
    name: 'mixin/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @mixin foo {\n  | ^^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'return/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'return/plain.css',
    data: '@return foo;\n',
  },
  {
    name: 'return/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @return foo;\n  | ^^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'warn/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'warn/plain.css',
    data: '@warn foo;\n',
  },
  {
    name: 'warn/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @warn foo;\n  | ^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'while/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'while/plain.css',
    data: '@while false {\n  a {\n    x: y;\n  }\n}\n',
  },
  {
    name: 'while/error',
    data: "Error: This at-rule isn't allowed in plain CSS.\n  ,\n1 | @while false {\n  | ^^^^^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interpolation/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'interpolation/plain.css',
    data: '@foo a#{b}c;\n',
  },
  {
    name: 'interpolation/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n1 | @foo a#{b}c;\n  |       ^^^^\n  '\n  plain.css 1:7   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
