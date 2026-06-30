// https://github.com/sass/sass-spec/blob/HEAD/spec/css/unknown_directive/whitespace.hrx

export default [
  {
    name: 'no_children/before_value/scss/input.scss',
    data: '@a \n  b\n',
  },
  {
    name: 'no_children/before_value/scss/output.css',
    data: '@a b;\n',
  },
  {
    name: 'no_children/before_value/sass/input.sass',
    data: '@a\n  b\n',
  },
  {
    name: 'no_children/before_value/sass/output.css',
    data: '@a {}\n',
  },
  {
    name: 'no_children/before_value/sass/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n2 |   b\n  |   ^\n  '\n    input.sass 2:3  root stylesheet\n",
  },
  {
    name: 'children/before_value/sass/input.sass',
    data: '@a\n  b\n   c: d\n',
  },
  {
    name: 'children/before_value/sass/output.css',
    data: '@a {\n  b {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'children/before_value/scss/input.scss',
    data: '@a\n  b {}\n',
  },
  {
    name: 'children/before_value/scss/output.css',
    data: '@a b {}\n',
  },
  {
    name: 'children/no_value/scss/input.scss',
    data: '@a\n  {}\n',
  },
  {
    name: 'children/no_value/scss/output.css',
    data: '@a {}\n',
  },
  {
    name: 'children/no_value/sass/input.sass',
    data: '@a\n  c: d',
  },
  {
    name: 'children/no_value/sass/output.css',
    data: '@a {\n  c: d;\n}\n',
  },
]
