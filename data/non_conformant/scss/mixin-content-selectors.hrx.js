// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/mixin-content-selectors.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo($x: 1) {\n  foo-sel {\n    @content;\n  }\n}\n\ndiv {\n  $x: hey;\n  @include foo() {\n    bar {\n      color: red;\n      hux {\n        msg: $x;\n      }\n    }\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'div foo-sel bar {\n  color: red;\n}\ndiv foo-sel bar hux {\n  msg: hey;\n}\n',
  },
]
