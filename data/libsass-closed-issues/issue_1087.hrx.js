// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1087.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: bar;\na {\n  foo: url($foo);\n  foo: url(#{$foo});\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  foo: url(bar);\n  foo: url(bar);\n}\n',
  },
]
