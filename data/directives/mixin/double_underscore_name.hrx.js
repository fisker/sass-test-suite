// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/mixin/double_underscore_name.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin __a() {b: c}\nd {@include __a}\n',
  },
  {
    name: 'output.css',
    data: 'd {\n  b: c;\n}\n',
  },
]
