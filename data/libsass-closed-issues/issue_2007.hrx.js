export default [
  {
    name: 'input.scss',
    data: '@mixin foo() {\n  @media (mix-width: 100px) {\n    @extend %bar;\n  }\n}\n\nfoo {\n  @media (mix-width: 100px) {\n    %bar {\n      foo: bar;\n    }\n  }\n\n  @include foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (mix-width: 100px) {\n  foo foo {\n    foo: bar;\n  }\n}\n',
  },
]
