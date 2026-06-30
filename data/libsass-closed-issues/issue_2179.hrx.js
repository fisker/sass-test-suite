// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2179.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin sprite-arrow() {\n  @extend %hidden-text;\n}\n\n%hidden-text {\n  text-indent: -999em;\n}\n\n// button.scss\n.button-left,\n.button-right,\n.button-plus,\n.button-min {\n  &:after {\n      @include sprite-arrow();\n  }\n}\n\n.banner {\n  &:after {\n      @include sprite-arrow();\n  }\n}\n\n.calculator {\n  .btn-down,\n  .btn-up {\n      &:after {\n          @include sprite-arrow();\n      }\n  }\n}',
  },
  {
    name: 'output.css',
    data: '.calculator .btn-down:after,\n.calculator .btn-up:after, .banner:after, .button-left:after,\n.button-right:after,\n.button-plus:after,\n.button-min:after {\n  text-indent: -999em;\n}\n',
  },
]
