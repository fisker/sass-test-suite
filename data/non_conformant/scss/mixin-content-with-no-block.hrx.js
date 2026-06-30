// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/mixin-content-with-no-block.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo {\n  .foo {\n    color: red;\n    @content;\n  }\n}\n\ndiv.a {\n  @include foo() {\n    hey: now;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'div.a .foo {\n  color: red;\n  hey: now;\n}\n',
  },
]
