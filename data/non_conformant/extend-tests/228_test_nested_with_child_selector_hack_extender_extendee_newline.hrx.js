export default [
  {
    name: 'input.scss',
    data: '> .foo {a: b}\nflip,\n> foo bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '> .foo, > flip,\n> foo bar {\n  a: b;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "> .foo" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | > .foo {a: b}\n  | ^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector "> foo bar" is invalid CSS and shouldn\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n3 | > foo bar {@extend .foo}\n  | ^^^^^^^^^ invalid selector\n  |            ============ @extend rule\n  \'\n    input.scss 3:1  root stylesheet\n',
  },
]
