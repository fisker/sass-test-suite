// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1741.hrx

export default [
  {
    name: 'input.scss',
    data: '.header {\r\n  .nav-text-link:not(&.popover-link) {\r\n    margin: 10px;\r\n  }\r\n}',
  },
  {
    name: 'output.css',
    data: '.nav-text-link:not(.header.popover-link) {\n  margin: 10px;\n}\n',
  },
]
