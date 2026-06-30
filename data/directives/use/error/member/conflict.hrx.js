export default [
  {
    name: 'variable/input.scss',
    data: '@use "other1" as *;\n@use "other2" as *;\n\na {b: $member}\n',
  },
  {
    name: 'variable/other1.scss',
    data: '$member: from other1;\n',
  },
  {
    name: 'variable/other2.scss',
    data: '$member: from other2;\n',
  },
  {
    name: 'variable/error',
    data: 'Error: This variable is available from multiple global modules.\n    ,\n1   | @use "other1" as *;\n    | ================== includes variable\n2   | @use "other2" as *;\n    | ================== includes variable\n... |\n4   | a {b: $member}\n    |       ^^^^^^^ variable use\n    \'\n  input.scss 4:7  root stylesheet\n',
  },
  {
    name: 'function/input.scss',
    data: '@use "other1" as *;\n@use "other2" as *;\n\na {b: member()}\n',
  },
  {
    name: 'function/other1.scss',
    data: '@function member() {@return from other1}\n',
  },
  {
    name: 'function/other2.scss',
    data: '@function member() {@return from other2}\n',
  },
  {
    name: 'function/error',
    data: 'Error: This function is available from multiple global modules.\n    ,\n1   | @use "other1" as *;\n    | ================== includes function\n2   | @use "other2" as *;\n    | ================== includes function\n... |\n4   | a {b: member()}\n    |       ^^^^^^^^ function use\n    \'\n  input.scss 4:7  root stylesheet\n',
  },
  {
    name: 'mixin/input.scss',
    data: '@use "other1" as *;\n@use "other2" as *;\n\na {@include member}\n',
  },
  {
    name: 'mixin/other1.scss',
    data: '@mixin member {a: from other1}\n',
  },
  {
    name: 'mixin/other2.scss',
    data: '@mixin member {a: from other2}\n',
  },
  {
    name: 'mixin/error',
    data: 'Error: This mixin is available from multiple global modules.\n    ,\n1   | @use "other1" as *;\n    | ================== includes mixin\n2   | @use "other2" as *;\n    | ================== includes mixin\n... |\n4   | a {@include member}\n    |    ^^^^^^^^^^^^^^^ mixin use\n    \'\n  input.scss 4:4  root stylesheet\n',
  },
  {
    name: 'same_value/variable/input.scss',
    data: '@use "other1" as *;\n@use "other2" as *;\n\na {b: $c}\n',
  },
  {
    name: 'same_value/variable/_other1.scss',
    data: '$c: d;\n',
  },
  {
    name: 'same_value/variable/_other2.scss',
    data: '$c: d;\n',
  },
  {
    name: 'same_value/variable/error',
    data: 'Error: This variable is available from multiple global modules.\n    ,\n1   | @use "other1" as *;\n    | ================== includes variable\n2   | @use "other2" as *;\n    | ================== includes variable\n... |\n4   | a {b: $c}\n    |       ^^ variable use\n    \'\n  input.scss 4:7  root stylesheet\n',
  },
  {
    name: 'same_value/function/input.scss',
    data: '@use "other1" as *;\n@use "other2" as *;\n\na {b: c()}\n',
  },
  {
    name: 'same_value/function/_other1.scss',
    data: '@function c() {@return d}\n',
  },
  {
    name: 'same_value/function/_other2.scss',
    data: '@function c() {@return d}\n',
  },
  {
    name: 'same_value/function/error',
    data: 'Error: This function is available from multiple global modules.\n    ,\n1   | @use "other1" as *;\n    | ================== includes function\n2   | @use "other2" as *;\n    | ================== includes function\n... |\n4   | a {b: c()}\n    |       ^^^ function use\n    \'\n  input.scss 4:7  root stylesheet\n',
  },
  {
    name: 'same_value/mixin/input.scss',
    data: '@use "other1" as *;\n@use "other2" as *;\n\na {@include b}\n',
  },
  {
    name: 'same_value/mixin/_other1.scss',
    data: '@mixin b {c: d}\n',
  },
  {
    name: 'same_value/mixin/_other2.scss',
    data: '@mixin b {c: d}\n',
  },
  {
    name: 'same_value/mixin/error',
    data: 'Error: This mixin is available from multiple global modules.\n    ,\n1   | @use "other1" as *;\n    | ================== includes mixin\n2   | @use "other2" as *;\n    | ================== includes mixin\n... |\n4   | a {@include b}\n    |    ^^^^^^^^^^ mixin use\n    \'\n  input.scss 4:4  root stylesheet\n',
  },
]
