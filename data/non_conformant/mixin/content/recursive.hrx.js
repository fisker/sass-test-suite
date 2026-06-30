// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/mixin/content/recursive.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin span($i) {\n  x: y;\n  @content;\n}\n\n.a {\n  @include span(5) {\n    .inner { @include span(2); }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.a {\n  x: y;\n}\n.a .inner {\n  x: y;\n}\n',
  },
]
