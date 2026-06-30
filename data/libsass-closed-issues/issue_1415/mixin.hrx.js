export default [
  {
    name: 'input.scss',
    data: '@mixin prepend-foo {\n  $parent: &;\n\n  @if $parent {\n    .foo & {\n      @content;\n    }\n  } @else {\n    .foo {\n      @content;\n    }\n  }\n}\n\n@include prepend-foo {\n  bar {\n    color: red;\n  }\n}\n\nbar {\n  @include prepend-foo {\n    baz {\n      color: red;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo bar {\n  color: red;\n}\n\n.foo bar baz {\n  color: red;\n}\n',
  },
]
