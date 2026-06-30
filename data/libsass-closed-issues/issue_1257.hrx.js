// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1257.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n.foo {\n  color: color.invert(red...);\n}',
  },
  {
    name: 'output.css',
    data: '.foo {\n  color: aqua;\n}\n',
  },
]
