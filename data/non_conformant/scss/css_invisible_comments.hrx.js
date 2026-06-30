// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/css_invisible_comments.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  a: d; }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: d;\n}\n',
  },
]
