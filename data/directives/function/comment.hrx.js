export default [
  {
    name: 'function/before_name/loud/input.scss',
    data: '@function /**/ a() {}\n',
  },
  {
    name: 'function/before_name/loud/output.css',
    data: '',
  },
  {
    name: 'function/before_name/silent/input.scss',
    data: '@function //\n  a() {}\n',
  },
  {
    name: 'function/before_name/silent/output.css',
    data: '',
  },
  {
    name: 'function/after_args/loud/input.scss',
    data: '@function a() /**/ {}\n',
  },
  {
    name: 'function/after_args/loud/output.css',
    data: '',
  },
  {
    name: 'function/after_args/silent/input.scss',
    data: '@function a() //\n  {}\n',
  },
  {
    name: 'function/after_args/silent/output.css',
    data: '',
  },
  {
    name: 'return/before_value/loud/input.scss',
    data: '@function a() {@return /**/ b}\n',
  },
  {
    name: 'return/before_value/loud/output.css',
    data: '',
  },
  {
    name: 'return/before_value/silent/input.scss',
    data: '@function a() {\n  @return //\n    b\n}\n',
  },
  {
    name: 'return/before_value/silent/output.css',
    data: '',
  },
  {
    name: 'return/after_value/loud/input.scss',
    data: '@function a() {@return b /**/}\n',
  },
  {
    name: 'return/after_value/loud/output.css',
    data: '',
  },
  {
    name: 'return/after_value/silent/input.scss',
    data: '@function a() {\n  @return b //\n}\n',
  },
  {
    name: 'return/after_value/silent/output.css',
    data: '',
  },
]
