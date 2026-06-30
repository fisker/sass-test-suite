// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_506.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$list: foo bar baz;\n$list--comma: foo, bar, baz;\n$single: foo;\n\ndiv {\n  _list-space: list.separator($list);\n  _list-comma: list.separator($list--comma);\n  _single-item: list.separator($single);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  _list-space: space;\n  _list-comma: comma;\n  _single-item: space;\n}\n',
  },
]
