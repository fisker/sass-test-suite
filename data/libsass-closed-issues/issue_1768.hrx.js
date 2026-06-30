// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1768.hrx

export default [
  {
    name: 'input.scss',
    data: '@debug(());\n@debug(foo, (), bar);\n@debug(foo () bar);\n@debug((foo: (), bar: baz));',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'input.scss:1 DEBUG: ()\ninput.scss:2 DEBUG: foo, (), bar\ninput.scss:3 DEBUG: foo () bar\ninput.scss:4 DEBUG: (foo: (), bar: baz)\n',
  },
]
