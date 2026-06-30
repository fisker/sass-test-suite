export default [
  {
    name: 'before_name/scss/input.scss',
    data: '@function\n  a() {}\n',
  },
  {
    name: 'before_name/scss/output.css',
    data: '',
  },
  {
    name: 'before_name/sass/input.sass',
    data: '@function\n  a()\n',
  },
  {
    name: 'before_name/sass/output.css',
    data: '',
  },
  {
    name: 'after_name/sass/input.sass',
    data: '@function a\n  ()\n',
  },
  {
    name: 'after_name/sass/output.css',
    data: '',
  },
  {
    name: 'nested_at_rule/scss/input.scss',
    data: '@function a() {@debug \n  b;\n  @return null}\n',
  },
  {
    name: 'nested_at_rule/scss/output.css',
    data: '',
  },
  {
    name: 'nested_at_rule/sass/input.sass',
    data: '@function a()\n  @debug \n    b\n  @return null\n',
  },
  {
    name: 'nested_at_rule/sass/output.css',
    data: '',
  },
]
