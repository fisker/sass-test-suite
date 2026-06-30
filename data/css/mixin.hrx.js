export default [
  {
    name: 'error/css/mixin/input.scss',
    data: '@mixin --a {}\n',
  },
  {
    name: 'error/css/mixin/error',
    data: "Error: Sass @mixin names beginning with -- are forbidden for forward-compatibility with plain CSS mixins.\n\nFor details, see https://sass-lang.com/d/css-function-mixin\n  ,\n1 | @mixin --a {}\n  |        ^^^\n  '\n  input.scss 1:8  root stylesheet\n",
  },
]
