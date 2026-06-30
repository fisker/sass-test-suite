export default [
  {
    name: 'input.scss',
    data: '@mixin breakpoint() {\n  @media (min-width: 200px) {\n    @content;\n  }\n}\n\n@mixin foo() {\n  @include breakpoint {\n    @extend %reveal-centered;\n  }\n}\n\n\nfoo {\n  @include breakpoint {\n    %reveal-centered {\n      left: auto;\n      right: auto;\n      margin: 0 auto;\n    }\n  }\n\n  @include foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (min-width: 200px) {\n  foo foo {\n    left: auto;\n    right: auto;\n    margin: 0 auto;\n  }\n}\n',
  },
]
