// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/escaped.hrx

export default [
  {
    name: 'input.scss',
    data: '@fo\\72ward "other"\n',
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
