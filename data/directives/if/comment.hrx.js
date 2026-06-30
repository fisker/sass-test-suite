// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/if/comment.hrx

export default [
  {
    name: 'if/before_condition/loud/input.scss',
    data: '@if /**/ true {}\n',
  },
  {
    name: 'if/before_condition/loud/output.css',
    data: '',
  },
  {
    name: 'if/before_condition/silent/input.scss',
    data: '@if //\n  true {}\n',
  },
  {
    name: 'if/before_condition/silent/output.css',
    data: '',
  },
  {
    name: 'if/after_condition/loud/input.scss',
    data: '@if true /**/ {}\n',
  },
  {
    name: 'if/after_condition/loud/output.css',
    data: '',
  },
  {
    name: 'if/after_condition/silent/input.scss',
    data: '@if true //\n  {}\n',
  },
  {
    name: 'if/after_condition/silent/output.css',
    data: '',
  },
  {
    name: 'else_if/before_if/loud/input.scss',
    data: '@if true {}\n@else /**/ if true {}\n',
  },
  {
    name: 'else_if/before_if/loud/output.css',
    data: '',
  },
  {
    name: 'else_if/before_if/silent/input.scss',
    data: '@if true {}\n@else //\n  if true {}\n',
  },
  {
    name: 'else_if/before_if/silent/output.css',
    data: '',
  },
  {
    name: 'else_if/before_condition/loud/input.scss',
    data: '@if true {}\n@else if /**/ true {}\n',
  },
  {
    name: 'else_if/before_condition/loud/output.css',
    data: '',
  },
  {
    name: 'else_if/before_condition/silent/input.scss',
    data: '@if true {}\n@else if //\n  true {}\n',
  },
  {
    name: 'else_if/before_condition/silent/output.css',
    data: '',
  },
  {
    name: 'else_if/after_condition/loud/input.scss',
    data: '@if true {}\n@else if true /**/ {}\n',
  },
  {
    name: 'else_if/after_condition/loud/output.css',
    data: '',
  },
  {
    name: 'else_if/after_condition/silent/input.scss',
    data: '@if true {}\n@else if true //\n  {}\n',
  },
  {
    name: 'else_if/after_condition/silent/output.css',
    data: '',
  },
  {
    name: 'else/before_block/loud/input.scss',
    data: '@if true {}\n@else /**/ {}\n',
  },
  {
    name: 'else/before_block/loud/output.css',
    data: '',
  },
  {
    name: 'else/before_block/silent/input.scss',
    data: '@if true {}\n@else //\n  {}\n',
  },
  {
    name: 'else/before_block/silent/output.css',
    data: '',
  },
]
