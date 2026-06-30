export default [
  {
    name: 'input.scss',
    data: '$color: blue;\n@mixin context($class, $color: red) {\n  .#{$class} {\n    background-color: $color;\n    @content;\n    border-color: $color;\n  }\n}\n@include context(parent) {\n  @include context(child, $color: yellow) {\n    color: $color;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.parent {\n  background-color: red;\n}\n.parent .child {\n  background-color: yellow;\n  color: blue;\n  border-color: yellow;\n}\n.parent {\n  border-color: red;\n}\n',
  },
]
