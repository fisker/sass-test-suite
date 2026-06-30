export default [
  {
    name: 'input.scss',
    data: '.foo .bar {a: b}\n> foo bar {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, > .foo foo bar, > foo .foo bar {\n  a: b;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "> foo bar" is invalid CSS and shouldn\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | > foo bar {@extend .bar}\n  | ^^^^^^^^^ invalid selector\n  |            ============ @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
]
