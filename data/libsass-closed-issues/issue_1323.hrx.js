// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1323.hrx

export default [
  {
    name: 'input.scss',
    data: '@import url(foo.css) only screen;\n@import url(foo.css) (min-width:400px);\n@import url(foo.css) (min-width:400px) and (max-width:599px);\n',
  },
  {
    name: 'output.css',
    data: '@import url(foo.css) only screen;\n@import url(foo.css) (min-width: 400px);\n@import url(foo.css) (min-width: 400px) and (max-width: 599px);\n',
  },
]
