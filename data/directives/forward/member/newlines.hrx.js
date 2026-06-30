export default [
  {
    name: 'hide/after/input.sass',
    data: '@forward "upstream" hide \n  a\n',
  },
  {
    name: 'hide/after/_upstream.sass',
    data: '$a: b\n',
  },
  {
    name: 'hide/after/output.css',
    data: '',
  },
  {
    name: 'show/after/input.sass',
    data: '@forward "upstream" show \n  a\n',
  },
  {
    name: 'show/after/_upstream.sass',
    data: '$a: b\n',
  },
  {
    name: 'show/after/output.css',
    data: '',
  },
  {
    name: 'error/hide/between/input.sass',
    data: '@forward "upstream" hide a\n  c\n',
  },
  {
    name: 'error/hide/between/_upstream.sass',
    data: '$a: b\n$c: d\n',
  },
  {
    name: 'error/hide/between/error',
    data: "Error: Nothing may be indented beneath a @forward rule.\n  ,\n2 |   c\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
  {
    name: 'error/show/whitespace_between/input.sass',
    data: '@forward "upstream" show a\n  c\n',
  },
  {
    name: 'error/show/whitespace_between/_upstream.sass',
    data: '$a: b\n$c: d\n',
  },
  {
    name: 'error/show/whitespace_between/error',
    data: "Error: Nothing may be indented beneath a @forward rule.\n  ,\n2 |   c\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
]
