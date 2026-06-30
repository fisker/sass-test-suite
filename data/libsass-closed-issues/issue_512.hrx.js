// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_512.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$list: a b c;\n.css {\n  debug: list.index($list, a);\n\n  @if meta.type-of(list.index($list, 2)) == "null" {\n    debug: foo;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.css {\n  debug: 1;\n  debug: foo;\n}\n',
  },
]
