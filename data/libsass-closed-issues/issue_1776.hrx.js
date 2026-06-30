// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1776.hrx

export default [
  {
    name: 'input.scss',
    data: 'h1 {\r\n  width :calc(100% - 110px);\r\n}',
  },
  {
    name: 'output.css',
    data: 'h1 {\n  width: calc(100% - 110px);\n}\n',
  },
]
