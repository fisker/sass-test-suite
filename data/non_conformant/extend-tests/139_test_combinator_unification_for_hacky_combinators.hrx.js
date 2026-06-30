export default [
  {
    name: 'input.scss',
    data: '.a ~ > + .b > x {a: b}\n.c > + .d > y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ".a ~ > + .b > x" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | .a ~ > + .b > x {a: b}\n  | ^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector ".c > + .d > y" is invalid CSS and can\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | .c > + .d > y {@extend x}\n  | ^^^^^^^^^^^^^ invalid selector\n  |                ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
]
