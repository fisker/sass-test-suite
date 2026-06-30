// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/escaped.hrx

export default [
  {
    name: 'input.scss',
    data: '@u\\73 e "other"\n',
  },
  {
    name: 'other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
