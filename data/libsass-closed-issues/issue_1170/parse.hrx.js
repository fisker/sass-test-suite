// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1170/parse.hrx

export default [
  {
    name: 'input.scss',
    data: "el {\n  @if (& + '' == 'el') {\n    content: \"It works!\";\n  }\n}",
  },
  {
    name: 'output.css',
    data: 'el {\n  content: "It works!";\n}\n',
  },
]
