export default [
  {
    name: 'input.scss',
    data: '// Regression test for sass/dart-sass#482.\n@mixin outer {\n  a {@content}\n}\n\n@mixin inner {\n  @content;\n}\n\n@include outer {\n  @include inner {}\n  x: y;\n}',
  },
  {
    name: 'output.css',
    data: 'a {\n  x: y;\n}\n',
  },
]
