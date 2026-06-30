export default [
  {
    name: 'before_query/scss/input.scss',
    data: '@media \n  screen {}\n',
  },
  {
    name: 'before_query/scss/output.css',
    data: '',
  },
  {
    name: 'after_query/scss/input.scss',
    data: '@media screen \n  {}\n',
  },
  {
    name: 'after_query/scss/output.css',
    data: '',
  },
  {
    name: 'paren/after_paren/sass/input.sass',
    data: '@media (\n  a: b)\n',
  },
  {
    name: 'paren/after_paren/sass/output.css',
    data: '',
  },
  {
    name: 'paren/after_key/sass/input.sass',
    data: '@media (a\n  : b)\n',
  },
  {
    name: 'paren/after_key/sass/output.css',
    data: '',
  },
  {
    name: 'paren/after_colon/sass/input.sass',
    data: '@media (a:\n   b)\n',
  },
  {
    name: 'paren/after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'paren/after_value/sass/input.sass',
    data: '@media (a: b\n  )\n',
  },
  {
    name: 'paren/after_value/sass/output.css',
    data: '',
  },
  {
    name: 'paren/nested/after_inside/sass/input.sass',
    data: '@media ((a: b)\n  )\n',
  },
  {
    name: 'paren/nested/after_inside/sass/output.css',
    data: '',
  },
  {
    name: 'paren/nested/after_and/sass/input.sass',
    data: '@media ((a: b) and\n  (c: d))\n',
  },
  {
    name: 'paren/nested/after_and/sass/output.css',
    data: '',
  },
  {
    name: 'paren/nested/after_or/sass/input.sass',
    data: '@media ((a: b) or\n  (c: d))\n',
  },
  {
    name: 'paren/nested/after_or/sass/output.css',
    data: '',
  },
  {
    name: 'paren/after_not/sass/input.sass',
    data: '@media (not\n  (a: b))\n',
  },
  {
    name: 'paren/after_not/sass/output.css',
    data: '',
  },
  {
    name: 'paren/after_operator/sass/input.sass',
    data: '@media (a >\n  b)\n',
  },
  {
    name: 'paren/after_operator/sass/output.css',
    data: '',
  },
  {
    name: 'paren/after_second_operator/sass/input.sass',
    data: '@media (a > b >\n  c)\n',
  },
  {
    name: 'paren/after_second_operator/sass/output.css',
    data: '',
  },
  {
    name: 'error/before_query/sass/input.sass',
    data: '@media\n  screen\n',
  },
  {
    name: 'error/before_query/sass/error',
    data: "Error: Expected identifier.\n  ,\n1 | @media\n  |       ^\n  '\n  input.sass 1:7  root stylesheet\n",
  },
  {
    name: 'error/logic_sequence/before_operator/sass/input.sass',
    data: '@media (a: b)\n  and (c: d)\n',
  },
  {
    name: 'error/logic_sequence/before_operator/sass/error',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n2 |   and (c: d)\n  |   ^^^^^^^^^^\n  '\n    input.sass 2:3  root stylesheet\n\nError: expected selector.\n  ,\n2 |   and (c: d)\n  |       ^\n  '\n  input.sass 2:7  root stylesheet\n",
  },
  {
    name: 'error/logic_sequence/after_operator/sass/input.sass',
    data: '@media (a: b) and\n  (c: d)\n',
  },
  {
    name: 'error/logic_sequence/after_operator/sass/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media (a: b) and\n  |                  ^\n  '\n  input.sass 1:18  root stylesheet\n",
  },
]
