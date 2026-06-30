export default [
  {
    name: 'static/alpha/input.scss',
    data: 'a {b: lab(from #aaa l a b / 25%)}\n',
  },
  {
    name: 'static/alpha/output.css',
    data: 'a {\n  b: lab(from #aaa l a b/25%);\n}\n',
  },
  {
    name: 'static/no_alpha/input.scss',
    data: 'a {b: lab(from #aaa l a b)}\n',
  },
  {
    name: 'static/no_alpha/output.css',
    data: 'a {\n  b: lab(from #aaa l a b);\n}\n',
  },
  {
    name: 'calc/alpha/input.scss',
    data: 'a {b: lab(from #aaa calc(l + 0.2) a b / 25%)}\n',
  },
  {
    name: 'calc/alpha/output.css',
    data: 'a {\n  b: lab(from #aaa calc(l + 0.2) a b/25%);\n}\n',
  },
  {
    name: 'calc/no_alpha/input.scss',
    data: 'a {b: lab(from #aaa calc(l + 0.2) a b)}\n',
  },
  {
    name: 'calc/no_alpha/output.css',
    data: 'a {\n  b: lab(from #aaa calc(l + 0.2) a b);\n}\n',
  },
  {
    name: 'var/alpha/input.scss',
    data: 'a {b: lab(from var(--c) l a b / 25%)}\n',
  },
  {
    name: 'var/alpha/output.css',
    data: 'a {\n  b: lab(from var(--c) l a b/25%);\n}\n',
  },
  {
    name: 'var/no_alpha/input.scss',
    data: 'a {b: lab(from var(--c) l a b)}\n',
  },
  {
    name: 'var/no_alpha/output.css',
    data: 'a {\n  b: lab(from var(--c) l a b);\n}\n',
  },
  {
    name: 'different_case/alpha/input.scss',
    data: 'a {b: lab(From #aaa l a b / 25%)}\n',
  },
  {
    name: 'different_case/alpha/output.css',
    data: 'a {\n  b: lab(From #aaa l a b/25%);\n}\n',
  },
  {
    name: 'different_case/no_alpha/input.scss',
    data: 'a {b: lab(From #aaa l a b)}\n',
  },
  {
    name: 'different_case/no_alpha/output.css',
    data: 'a {\n  b: lab(From #aaa l a b);\n}\n',
  },
  {
    name: 'slash_list_alpha/input.scss',
    data: '@use "sass:list";\na {b: lab(list.slash(from #aaa r g b, 25%))}\n',
  },
  {
    name: 'slash_list_alpha/output.css',
    data: 'a {\n  b: lab(from #aaa r g b / 25%);\n}\n',
  },
  {
    name: 'error/quoted/alpha/input.scss',
    data: 'a {b: lab("from" #aaa l a b / 25%)}\n',
  },
  {
    name: 'error/quoted/alpha/error',
    data: 'Error: $channels: Expected lightness channel to be a number, was "from".\n  ,\n1 | a {b: lab("from" #aaa l a b / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'error/quoted/no_alpha/input.scss',
    data: 'a {b: lab("from" #aaa l a b)}\n',
  },
  {
    name: 'error/quoted/no_alpha/error',
    data: 'Error: $channels: Expected lightness channel to be a number, was "from".\n  ,\n1 | a {b: lab("from" #aaa l a b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'error/wrong_keyword/alpha/input.scss',
    data: 'a {b: lab(c #aaa l a b / 25%)}\n',
  },
  {
    name: 'error/wrong_keyword/alpha/error',
    data: "Error: $channels: Expected lightness channel to be a number, was c.\n  ,\n1 | a {b: lab(c #aaa l a b / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/wrong_keyword/no_alpha/input.scss',
    data: 'a {b: lab(c #aaa l a b)}\n',
  },
  {
    name: 'error/wrong_keyword/no_alpha/error',
    data: "Error: $channels: Expected lightness channel to be a number, was c.\n  ,\n1 | a {b: lab(c #aaa l a b)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
