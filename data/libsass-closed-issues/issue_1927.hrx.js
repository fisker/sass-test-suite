// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1927.hrx

export default [
  {
    name: 'input.scss',
    data: '@media screen {\n  $variable: dynamic;\n  .foo-#{$variable} {a: b}\n  .bar {\n    @extend .foo-dynamic\n  }\n}',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  .foo-dynamic, .bar {\n    a: b;\n  }\n}\n',
  },
]
