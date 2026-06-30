// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/if/whitespace.hrx

export default [
  {
    name: 'if/before_condition/scss/input.scss',
    data: '@if\n  true {}\n',
  },
  {
    name: 'if/before_condition/scss/output.css',
    data: '',
  },
  {
    name: 'if/before_condition/sass/input.sass',
    data: '@if\n  true\n',
  },
  {
    name: 'if/before_condition/sass/output.css',
    data: '',
  },
  {
    name: 'else_if/before_if/sass/input.sass',
    data: '@if true\n@else\n  if true\n',
  },
  {
    name: 'else_if/before_if/sass/output.css',
    data: '',
  },
  {
    name: 'else_if/before_if/sass/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n3 |   if true\n  |   ^^^^^^^\n  '\n    input.sass 3:3  root stylesheet\n",
  },
  {
    name: 'else_if/before_condition/scss/input.scss',
    data: '@if true {}\n@else if \n  true {}\n',
  },
  {
    name: 'else_if/before_condition/scss/output.css',
    data: '',
  },
  {
    name: 'else_if/before_condition/sass/input.sass',
    data: '@if true\n@else if\n  true\n',
  },
  {
    name: 'else_if/before_condition/sass/output.css',
    data: '',
  },
  {
    name: 'else_if/after_condition/scss/input.scss',
    data: '@if true {}\n@else if true \n  {}\n',
  },
  {
    name: 'else_if/after_condition/scss/output.css',
    data: '',
  },
  {
    name: 'else/before_block/scss/input.scss',
    data: '@if true {}\n@else\n  {}\n',
  },
  {
    name: 'else/before_block/scss/output.css',
    data: '',
  },
  {
    name: 'condition/before_and/scss/input.scss',
    data: '@if true \n  and true{}\n',
  },
  {
    name: 'condition/before_and/scss/output.css',
    data: '',
  },
  {
    name: 'condition/before_and/sass/input.sass',
    data: '@if true\n  and true\n',
  },
  {
    name: 'condition/before_and/sass/output.css',
    data: '',
  },
  {
    name: 'condition/before_and/sass/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n2 |   and true\n  |   ^^^^^^^^\n  '\n    input.sass 2:3  root stylesheet\n",
  },
  {
    name: 'condition/after_and/scss/input.scss',
    data: '@if true and\n  true {}\n',
  },
  {
    name: 'condition/after_and/scss/output.css',
    data: '',
  },
  {
    name: 'condition/after_and/sass/input.sass',
    data: '@if true and\n  true\n',
  },
  {
    name: 'condition/after_and/sass/output.css',
    data: '',
  },
  {
    name: 'error/else_if/before_if/scss/input.scss',
    data: '@if true {}\n@else \n  if true {}\n',
  },
  {
    name: 'error/else_if/before_if/scss/output.css',
    data: '',
  },
  {
    name: 'error/top_level_else/sass/input.sass',
    data: '@else\n',
  },
  {
    name: 'error/top_level_else/sass/error',
    data: "Error: This at-rule is not allowed here.\n  ,\n1 | @else\n  | ^^^^^\n  '\n  input.sass 1:1  root stylesheet\n",
  },
  {
    name: 'error/top_level_else_if/sass/input.sass',
    data: '@else\nif\n',
  },
  {
    name: 'error/top_level_else_if/sass/error',
    data: "Error: This at-rule is not allowed here.\n  ,\n1 | @else\n  | ^^^^^\n  '\n  input.sass 1:1  root stylesheet\n",
  },
]
