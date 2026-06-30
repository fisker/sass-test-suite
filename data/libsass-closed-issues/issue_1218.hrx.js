// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1218.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 20px;\n@media screen and ("min-width:#{$foo}") {\n    .bar {\n        width: 12px;\n    }\n}\n@media screen and ("min-width:0") {\n    .bar {\n        width: 12px;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen and (min-width:20px) {\n  .bar {\n    width: 12px;\n  }\n}\n@media screen and (min-width:0) {\n  .bar {\n    width: 12px;\n  }\n}\n',
  },
]
