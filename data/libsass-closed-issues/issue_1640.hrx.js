export default [
  {
    name: 'input.scss',
    data: '@mixin foo() {\n    @if false {\n      a { b: c }\n    } @else {\n      @content;\n    }\n}\n\n@include foo() {\n  .foo {\n    bar: baz;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  bar: baz;\n}\n',
  },
]
