// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/mixin/custom_ident_include.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin __a() {b: c}\nd {@include --a}\n',
  },
  {
    name: 'error',
    data: "Error: Sass @mixin names beginning with -- are forbidden for forward-compatibility with plain CSS mixins.\n\nFor details, see https://sass-lang.com/d/css-function-mixin\n  ,\n2 | d {@include --a}\n  |             ^^^\n  '\n  input.scss 2:13  root stylesheet\n",
  },
]
