export default [
  {
    name: 'static/alpha/input.scss',
    data: 'a {b: rgb(from #aaa r g b / 25%)}\n',
  },
  {
    name: 'static/alpha/output.css',
    data: 'a {\n  b: rgb(from #aaa r g b/25%);\n}\n',
  },
  {
    name: 'static/no_alpha/input.scss',
    data: 'a {b: rgb(from #aaa r g b)}\n',
  },
  {
    name: 'static/no_alpha/output.css',
    data: 'a {\n  b: rgb(from #aaa r g b);\n}\n',
  },
  {
    name: 'calc/alpha/input.scss',
    data: 'a {b: rgb(from #aaa calc(r + 2) g b / 25%)}\n',
  },
  {
    name: 'calc/alpha/output.css',
    data: 'a {\n  b: rgb(from #aaa calc(r + 2) g b/25%);\n}\n',
  },
  {
    name: 'calc/no_alpha/input.scss',
    data: 'a {b: rgb(from #aaa calc(r + 2) g b)}\n',
  },
  {
    name: 'calc/no_alpha/output.css',
    data: 'a {\n  b: rgb(from #aaa calc(r + 2) g b);\n}\n',
  },
  {
    name: 'var/alpha/input.scss',
    data: 'a {b: rgb(from var(--c) r g b / 25%)}\n',
  },
  {
    name: 'var/alpha/output.css',
    data: 'a {\n  b: rgb(from var(--c) r g b/25%);\n}\n',
  },
  {
    name: 'var/no_alpha/input.scss',
    data: 'a {b: rgb(from var(--c) r g b)}\n',
  },
  {
    name: 'var/no_alpha/output.css',
    data: 'a {\n  b: rgb(from var(--c) r g b);\n}\n',
  },
  {
    name: 'different_case/alpha/input.scss',
    data: 'a {b: rgb(From #aaa r g b / 25%)}\n',
  },
  {
    name: 'different_case/alpha/output.css',
    data: 'a {\n  b: rgb(From #aaa r g b/25%);\n}\n',
  },
  {
    name: 'different_case/no_alpha/input.scss',
    data: 'a {b: rgb(From #aaa r g b)}\n',
  },
  {
    name: 'different_case/no_alpha/output.css',
    data: 'a {\n  b: rgb(From #aaa r g b);\n}\n',
  },
  {
    name: 'slash_list_alpha/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(from #aaa r g b, 25%))}\n',
  },
  {
    name: 'slash_list_alpha/output.css',
    data: 'a {\n  b: rgb(from #aaa r g b / 25%);\n}\n',
  },
  {
    name: 'error/quoted/alpha/input.scss',
    data: 'a {b: rgb("from" #aaa r g b / 25%)}\n',
  },
  {
    name: 'error/quoted/alpha/error',
    data: 'Error: $channels: Expected red channel to be a number, was "from".\n  ,\n1 | a {b: rgb("from" #aaa r g b / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'error/quoted/no_alpha/input.scss',
    data: 'a {b: rgb("from" #aaa r g b)}\n',
  },
  {
    name: 'error/quoted/no_alpha/error',
    data: 'Error: $channels: Expected red channel to be a number, was "from".\n  ,\n1 | a {b: rgb("from" #aaa r g b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'error/wrong_keyword/alpha/input.scss',
    data: 'a {b: rgb(c #aaa r g b / 25%)}\n',
  },
  {
    name: 'error/wrong_keyword/alpha/error',
    data: "Error: $channels: Expected red channel to be a number, was c.\n  ,\n1 | a {b: rgb(c #aaa r g b / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/wrong_keyword/no_alpha/input.scss',
    data: 'a {b: rgb(c #aaa r g b)}\n',
  },
  {
    name: 'error/wrong_keyword/no_alpha/error',
    data: "Error: $channels: Expected red channel to be a number, was c.\n  ,\n1 | a {b: rgb(c #aaa r g b)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
