// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1971.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo1 {\n  @supports (flex-wrap: wrap) {\n    flex: auto;\n  }\n}\n\n@supports (flex-wrap: wrap) {\n  %foo2 {\n    flex: auto;\n  }\n}\n\n.bar {\n  @extend %foo1;\n  @extend %foo2;\n}\n',
  },
  {
    name: 'output.css',
    data: '@supports (flex-wrap: wrap) {\n  .bar {\n    flex: auto;\n  }\n}\n\n@supports (flex-wrap: wrap) {\n  .bar {\n    flex: auto;\n  }\n}\n',
  },
]
