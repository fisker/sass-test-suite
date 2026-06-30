// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2000.hrx

export default [
  {
    name: 'input.scss',
    data: '.m__exhibit-header--medium {\n    @extend #{&}--plain;\n    &--plain {\n        font-size: --&;\n    }\n}',
  },
  {
    name: 'output.css',
    data: '.m__exhibit-header--medium--plain, .m__exhibit-header--medium {\n  font-size: -- .m__exhibit-header--medium--plain;\n}\n',
  },
]
