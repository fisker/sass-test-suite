// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2959.hrx

export default [
  {
    name: 'input.scss',
    data: '%color {\n\tcolor: blue;\n}\n\n@mixin getOverridedSelector {\n\t&#{&} {\n\t\t@content;\n\t}\n}\n\n.foo {\n\t@include getOverridedSelector {\n\t\t@extend %color;\n\t}\n}\n\n.bar {\n\t@include getOverridedSelector {\n\t\tcolor: red;\n\t}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo.foo {\n  color: blue;\n}\n\n.bar.bar {\n  color: red;\n}\n',
  },
]
