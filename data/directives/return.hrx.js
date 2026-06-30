export default [
  {
    name: 'sass/semicolon/input.sass',
    data: '@function foo()\n  @return a;\n',
  },
  {
    name: 'sass/semicolon/output.css',
    data: '',
  },
  {
    name: 'before_value/scss/input.scss',
    data: '@function a() {@return \n  b}\n',
  },
  {
    name: 'before_value/scss/output.css',
    data: '',
  },
  {
    name: 'before_value/sass/input.sass',
    data: '@function a()\n  @return\n    b\n',
  },
  {
    name: 'before_value/sass/output.css',
    data: '',
  },
]
