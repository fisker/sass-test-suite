// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2120.hrx

export default [
  {
    name: 'input.scss',
    data: '@import url(//xyz.cöm/ürl)',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n@import url(//xyz.cöm/ürl);\n',
  },
]
