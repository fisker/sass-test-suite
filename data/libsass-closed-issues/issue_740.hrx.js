// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_740.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: null;\n$foo: #fff !default;\n$bar: #000;\n$bar: #f00 !default;\n\nfoo {\n  foo: $foo;\n  bar: $bar;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: #fff;\n  bar: #000;\n}\n',
  },
]
