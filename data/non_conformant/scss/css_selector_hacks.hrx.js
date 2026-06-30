export default [
  {
    name: 'input.scss',
    data: '> > E {\n  a: b; }\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "> > E" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | > > E {\n  | ^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
]
