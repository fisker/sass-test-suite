export default [
  {
    name: 'single/child/input.scss',
    data: 'a > b {c: d}\n',
  },
  {
    name: 'single/child/output.css',
    data: 'a > b {\n  c: d;\n}\n',
  },
  {
    name: 'single/next_sibling/input.scss',
    data: 'a + b {c: d}\n',
  },
  {
    name: 'single/next_sibling/output.css',
    data: 'a + b {\n  c: d;\n}\n',
  },
  {
    name: 'single/sibling/input.scss',
    data: 'a ~ b {c: d}\n',
  },
  {
    name: 'single/sibling/output.css',
    data: 'a ~ b {\n  c: d;\n}\n',
  },
  {
    name: 'multiple/whitespace/input.scss',
    data: 'a > + b {c: d}\n',
  },
  {
    name: 'multiple/whitespace/output.css',
    data: '',
  },
  {
    name: 'multiple/whitespace/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "a > + b" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | a > + b {c: d}\n  | ^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'multiple/no_whitespace/input.scss',
    data: 'a~>b {c: d}\n',
  },
  {
    name: 'multiple/no_whitespace/output.css',
    data: '',
  },
  {
    name: 'multiple/no_whitespace/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "a ~ > b" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | a~>b {c: d}\n  | ^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
]
