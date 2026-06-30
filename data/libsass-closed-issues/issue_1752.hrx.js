export default [
  {
    name: 'input.scss',
    data: '@mixin some-fn($args...) {\n  @each $item in $args {\n    @debug($item);\n  }\n}\n\nfoo {\n  @include some-fn(());\n}',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'input.scss:3 DEBUG: ()\n',
  },
]
