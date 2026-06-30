// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/line_comment_in_script.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {a: 1 + // flang }\n  blang }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 1blang;\n}\n',
  },
]
