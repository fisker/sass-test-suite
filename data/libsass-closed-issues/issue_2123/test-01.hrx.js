// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2123/test-01.hrx

export default [
  {
    name: 'input.scss',
    data: '.class{background-image:url(//foo.bar/favicon.ico)}',
  },
  {
    name: 'output.css',
    data: '.class {\n  background-image: url(//foo.bar/favicon.ico);\n}\n',
  },
]
