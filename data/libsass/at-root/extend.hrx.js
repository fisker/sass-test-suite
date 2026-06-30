// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/extend.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @at-root {\n    %placeholder {\n      color: red;\n    }\n  }\n\n  baz {\n    @at-root {\n      %other-placeholder {\n        color: blue;\n      }\n    }\n  }\n}\n\nbar {\n  @extend %placeholder;\n}\n\nbaz {\n  @extend %other-placeholder;\n}\n',
  },
  {
    name: 'output.css',
    data: 'bar {\n  color: red;\n}\nbaz {\n  color: blue;\n}\n',
  },
]
