// https://github.com/sass/sass-spec/blob/HEAD/spec/css/custom_properties/syntax.hrx

export default [
  {
    name: 'initial_digit/declare/input.scss',
    data: 'a {--1: b}\n',
  },
  {
    name: 'initial_digit/declare/output.css',
    data: 'a {\n  --1: b;\n}\n',
  },
  {
    name: 'initial_digit/use/input.scss',
    data: 'a {b: var(--1)}\n',
  },
  {
    name: 'initial_digit/use/output.css',
    data: 'a {\n  b: var(--1);\n}\n',
  },
  {
    name: 'double_dash/declare/input.scss',
    data: 'a {--: b}\n',
  },
  {
    name: 'double_dash/declare/output.css',
    data: 'a {\n  --: b;\n}\n',
  },
  {
    name: 'double_dash/use/input.scss',
    data: 'a {b: var(--)}\n',
  },
  {
    name: 'double_dash/use/output.css',
    data: 'a {\n  b: var(--);\n}\n',
  },
  {
    name: 'triple_dash/declare/input.scss',
    data: 'a {---: b}\n',
  },
  {
    name: 'triple_dash/declare/output.css',
    data: 'a {\n  ---: b;\n}\n',
  },
  {
    name: 'triple_dash/use/input.scss',
    data: 'a {b: var(---)}\n',
  },
  {
    name: 'triple_dash/use/output.css',
    data: 'a {\n  b: var(---);\n}\n',
  },
  {
    name: 'sass/multiline_list/paren/input.sass',
    data: 'a\n  --b: (c\n    d)\n',
  },
  {
    name: 'sass/multiline_list/paren/output.css',
    data: 'a {\n  --b: (c\n    d);\n}\n',
  },
  {
    name: 'sass/multiline_list/brace/input.sass',
    data: 'a\n  --b: {c\n    d}\n',
  },
  {
    name: 'sass/multiline_list/brace/output.css',
    data: 'a {\n  --b: {c\n    d};\n}\n',
  },
  {
    name: 'sass/multiline_list/bracket/input.sass',
    data: 'a\n  --b: [c\n    d]\n',
  },
  {
    name: 'sass/multiline_list/bracket/output.css',
    data: 'a {\n  --b: [c\n    d];\n}\n',
  },
]
