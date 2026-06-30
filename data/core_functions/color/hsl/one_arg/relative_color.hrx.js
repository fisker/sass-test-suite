// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/one_arg/relative_color.hrx

export default [
  {
    name: 'static/alpha/input.scss',
    data: 'a {b: hsl(from #aaa h s l / 25%)}\n',
  },
  {
    name: 'static/alpha/output.css',
    data: 'a {\n  b: hsl(from #aaa h s l/25%);\n}\n',
  },
  {
    name: 'static/no_alpha/input.scss',
    data: 'a {b: hsl(from #aaa h s l)}\n',
  },
  {
    name: 'static/no_alpha/output.css',
    data: 'a {\n  b: hsl(from #aaa h s l);\n}\n',
  },
  {
    name: 'calc/alpha/input.scss',
    data: 'a {b: hsl(from #aaa calc(h + 180deg) s l / 25%)}\n',
  },
  {
    name: 'calc/alpha/output.css',
    data: 'a {\n  b: hsl(from #aaa calc(h + 180deg) s l/25%);\n}\n',
  },
  {
    name: 'calc/no_alpha/input.scss',
    data: 'a {b: hsl(from #aaa calc(h + 180deg) s l)}\n',
  },
  {
    name: 'calc/no_alpha/output.css',
    data: 'a {\n  b: hsl(from #aaa calc(h + 180deg) s l);\n}\n',
  },
  {
    name: 'var/alpha/input.scss',
    data: 'a {b: hsl(from var(--c) h s l / 25%)}\n',
  },
  {
    name: 'var/alpha/output.css',
    data: 'a {\n  b: hsl(from var(--c) h s l/25%);\n}\n',
  },
  {
    name: 'var/no_alpha/input.scss',
    data: 'a {b: hsl(from var(--c) h s l)}',
  },
  {
    name: 'var/no_alpha/output.css',
    data: 'a {\n  b: hsl(from var(--c) h s l);\n}\n',
  },
  {
    name: 'different_case/alpha/input.scss',
    data: 'a {b: hsl(From #aaa h s l / 25%)}\n',
  },
  {
    name: 'different_case/alpha/output.css',
    data: 'a {\n  b: hsl(From #aaa h s l/25%);\n}\n',
  },
  {
    name: 'different_case/no_alpha/input.scss',
    data: 'a {b: hsl(From #aaa h s l)}\n',
  },
  {
    name: 'different_case/no_alpha/output.css',
    data: 'a {\n  b: hsl(From #aaa h s l);\n}\n',
  },
  {
    name: 'slash_list_alpha/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(from #aaa h s l, 25%))}\n',
  },
  {
    name: 'slash_list_alpha/output.css',
    data: 'a {\n  b: hsl(from #aaa h s l / 25%);\n}\n',
  },
  {
    name: 'error/quoted/alpha/input.scss',
    data: 'a {b: hsl("from" #aaa h s l / 25%)}\n',
  },
  {
    name: 'error/quoted/alpha/error',
    data: 'Error: $channels: Expected hue channel to be a number, was "from".\n  ,\n1 | a {b: hsl("from" #aaa h s l / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'error/quoted/no_alpha/input.scss',
    data: 'a {b: hsl("from" #aaa h s l)}\n',
  },
  {
    name: 'error/quoted/no_alpha/error',
    data: 'Error: $channels: Expected hue channel to be a number, was "from".\n  ,\n1 | a {b: hsl("from" #aaa h s l)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'error/wrong_keyword/alpha/input.scss',
    data: 'a {b: hsl(c #aaa h s l / 25%)}\n',
  },
  {
    name: 'error/wrong_keyword/alpha/error',
    data: "Error: $channels: Expected hue channel to be a number, was c.\n  ,\n1 | a {b: hsl(c #aaa h s l / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/wrong_keyword/no_alpha/input.scss',
    data: 'a {b: hsl(c #aaa h s l)}\n',
  },
  {
    name: 'error/wrong_keyword/no_alpha/error',
    data: "Error: $channels: Expected hue channel to be a number, was c.\n  ,\n1 | a {b: hsl(c #aaa h s l)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
