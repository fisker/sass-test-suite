// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2360.hrx

export default [
  {
    name: 'input.sass',
    data: '@value test_1 #555\r\n@value test_2 rgb(0,255,0)',
  },
  {
    name: 'output.css',
    data: '@value test_1 #555;\n@value test_2 rgb(0,255,0);\n',
  },
]
