export default [
  {
    name: 'input.scss',
    data: "@mixin test() {\n  @at-root {\n    @include foo();\n  }\n}\n\n@mixin foo() {\n  #{'.foo'} {\n    bar: baz;\n  }\n}\n\n.test {\n  @include test();\n}\n",
  },
  {
    name: 'output.css',
    data: '.foo {\n  bar: baz;\n}\n',
  },
]
