export default [
  {
    name: 'input.scss',
    data: '.baz .foo {a: b}\nfoo + > > + bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz .foo {\n  a: b;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "foo + > > + bar" is invalid CSS and can\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | foo + > > + bar {@extend .foo}\n  | ^^^^^^^^^^^^^^^ invalid selector\n  |                  ============ @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
]
