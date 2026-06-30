export default [
  {
    name: 'before_query/loud/input.scss',
    data: '@media /**/ screen {}\n',
  },
  {
    name: 'before_query/loud/output.css',
    data: '',
  },
  {
    name: 'before_query/silent/input.scss',
    data: '@media //\n  screen {}\n',
  },
  {
    name: 'before_query/silent/output.css',
    data: '',
  },
  {
    name: 'after_query/loud/input.scss',
    data: '@media screen /**/ {}\n',
  },
  {
    name: 'after_query/loud/output.css',
    data: '',
  },
  {
    name: 'after_query/silent/input.scss',
    data: '@media screen //\n  {}\n',
  },
  {
    name: 'after_query/silent/output.css',
    data: '',
  },
]
