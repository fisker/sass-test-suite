// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_73.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin box-shadow($shadow...) { \r\n  -webkit-box-shadow: $shadow;\r\n     -moz-box-shadow: $shadow;\r\n          box-shadow: $shadow;\r\n}',
  },
  {
    name: 'output.css',
    data: '',
  },
]
