export default [
  {
    name: 'no_children/before_value/loud/input.scss',
    data: '@a /**/ b\n',
  },
  {
    name: 'no_children/before_value/loud/output.css',
    data: '@a b;\n',
  },
  {
    name: 'no_children/before_value/silent/input.scss',
    data: '@a //\n  b\n',
  },
  {
    name: 'no_children/before_value/silent/output.css',
    data: '@a b;\n',
  },
  {
    name: 'no_children/after_value/loud/input.scss',
    data: '@a b /**/\n',
  },
  {
    name: 'no_children/after_value/loud/output.css',
    data: '@a b /**/;\n',
  },
  {
    name: 'no_children/after_value/silent/input.scss',
    data: '@a b //\n',
  },
  {
    name: 'no_children/after_value/silent/output.css',
    data: '@a b;\n',
  },
  {
    name: 'no_children/no_value/loud/input.scss',
    data: '@a /**/\n',
  },
  {
    name: 'no_children/no_value/loud/output.css',
    data: '@a;\n',
  },
  {
    name: 'no_children/no_value/silent/input.scss',
    data: '@a //\n',
  },
  {
    name: 'no_children/no_value/silent/output.css',
    data: '@a;\n',
  },
  {
    name: 'children/before_value/loud/input.scss',
    data: '@a /**/ b {}\n',
  },
  {
    name: 'children/before_value/loud/output.css',
    data: '@a b {}\n',
  },
  {
    name: 'children/before_value/silent/input.scss',
    data: '@a //\n  b {}\n',
  },
  {
    name: 'children/before_value/silent/output.css',
    data: '@a b {}\n',
  },
  {
    name: 'children/after_value/loud/input.scss',
    data: '@a b /**/ {}\n',
  },
  {
    name: 'children/after_value/loud/output.css',
    data: '@a b /**/ {}\n',
  },
  {
    name: 'children/after_value/silent/input.scss',
    data: '@a b //\n  {}\n',
  },
  {
    name: 'children/after_value/silent/output.css',
    data: '@a b {}\n',
  },
  {
    name: 'children/no_value/loud/input.scss',
    data: '@a /**/ {}\n',
  },
  {
    name: 'children/no_value/loud/output.css',
    data: '@a {}\n',
  },
  {
    name: 'children/no_value/silent/input.scss',
    data: '@a //\n  {}\n',
  },
  {
    name: 'children/no_value/silent/output.css',
    data: '@a {}\n',
  },
]
