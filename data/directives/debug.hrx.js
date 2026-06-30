export default [
  {
    name: 'sass/semicolon/input.sass',
    data: '@debug a;\n',
  },
  {
    name: 'sass/semicolon/output.css',
    data: '',
  },
  {
    name: 'sass/semicolon/warning',
    data: 'input.sass:1 DEBUG: a\n',
  },
  {
    name: 'sass/multiline-after/input.sass',
    data: '@debug\na\n',
  },
  {
    name: 'sass/multiline-after/output.css',
    data: '',
  },
  {
    name: 'sass/multiline-after/warning',
    data: 'input.sass:1 DEBUG: a\n',
  },
]
