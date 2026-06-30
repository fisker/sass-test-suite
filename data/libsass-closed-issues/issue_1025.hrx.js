// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1025.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin m() {\n  .a & {\n    @content;\n  }\n}\n\n:not(:last-of-type) {\n  top: 10px;\n  @include m {\n    top: 10px;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: ':not(:last-of-type) {\n  top: 10px;\n}\n.a :not(:last-of-type) {\n  top: 10px;\n}\n',
  },
]
