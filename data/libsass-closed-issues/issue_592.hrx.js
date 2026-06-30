// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_592.hrx

export default [
  {
    name: 'input.scss',
    data: '%a::-webkit-scrollbar {\n    color: green;\n}\n\n.a {\n    .b {\n        @extend %a;\n    }\n\n    .c .b {\n        @extend %a;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: '.a .c .b::-webkit-scrollbar, .a .b::-webkit-scrollbar {\n  color: green;\n}\n',
  },
]
