export default [
  {
    name: 'input.scss',
    data: '> > E {\n  color: red;\n}\n\nE > > {\n  color: red;\n}\n\n> > E > > {\n  > > F > > {\n    color: red;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "> > E" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | > > E {\n  | ^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector "E > >" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n5 | E > > {\n  | ^^^^^\n  \'\n    input.scss 5:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector "> > E > > > > F > >" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n   ,\n10 |   > > F > > {\n   |   ^^^^^^^^^\n   \'\n    input.scss 10:3  root stylesheet\n',
  },
]
