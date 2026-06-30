export default [
  {
    name: 'input.scss',
    data: '.a x {a: b}\n.b > + y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a x {\n  a: b;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ".b > + y" is invalid CSS and can\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | .b > + y {@extend x}\n  | ^^^^^^^^ invalid selector\n  |           ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
]
