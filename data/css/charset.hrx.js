// https://github.com/sass/sass-spec/blob/HEAD/spec/css/charset.hrx

export default [
  {
    name: 'whitespace/scss/input.scss',
    data: '@charset\n  "a";\n',
  },
  {
    name: 'whitespace/scss/output.css',
    data: '',
  },
  {
    name: 'error/whitespace/sass/input.sass',
    data: '@charset\n  "a"\n',
  },
  {
    name: 'error/whitespace/sass/error',
    data: "Error: Expected string.\n  ,\n1 | @charset\n  |         ^\n  '\n  input.sass 1:9  root stylesheet\n",
  },
]
