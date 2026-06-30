// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/extend/trims_super_selector_without_combinator.hrx

export default [
  {
    name: 'options.yml',
    data: ':todo:\n  - dart-sass\n',
  },
  {
    name: 'input.scss',
    data: 'a b {\n  @extend %c;\n}\n\na > b {\n  @extend %c;\n}\n\n%c {\n  color: red;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a b {\n  color: red;\n}\n',
  },
]
