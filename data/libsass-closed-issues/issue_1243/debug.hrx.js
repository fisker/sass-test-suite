export default [
  {
    name: 'input.scss',
    data: '@debug("foo")\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'input.scss:1 DEBUG: foo\n',
  },
]
