// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_602.hrx

export default [
  {
    name: 'input.scss',
    data: '#foo.\\bar {\n  color: red;\n}\n\n#foo.b\\ar {\n  color: red;\n}\n\n#foo\\.bar {\n  color: red;\n}\n\n#foo\\bar {\n  color: red;\n}\n\n#fo\\o.bar {\n  color: red;\n}\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n#foo.ºr {\n  color: red;\n}\n\n#foo.b\\a r {\n  color: red;\n}\n\n#foo\\.bar {\n  color: red;\n}\n\n#fooºr {\n  color: red;\n}\n\n#foo.bar {\n  color: red;\n}\n',
  },
]
