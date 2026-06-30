export default [
  {
    name: 'middle/single/child/input.scss',
    data: ':is(a > b) {c: d}\n',
  },
  {
    name: 'middle/single/child/output.css',
    data: ':is(a > b) {\n  c: d;\n}\n',
  },
  {
    name: 'middle/single/next_sibling/input.scss',
    data: ':is(a + b) {c: d}\n',
  },
  {
    name: 'middle/single/next_sibling/output.css',
    data: ':is(a + b) {\n  c: d;\n}\n',
  },
  {
    name: 'middle/single/sibling/input.scss',
    data: ':is(a ~ b) {c: d}\n',
  },
  {
    name: 'middle/single/sibling/output.css',
    data: ':is(a ~ b) {\n  c: d;\n}\n',
  },
  {
    name: 'middle/multiple/input.scss',
    data: ':is(a > + b) {c: d}\n',
  },
  {
    name: 'middle/multiple/output.css',
    data: '',
  },
  {
    name: 'middle/multiple/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(a > + b)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(a > + b) {c: d}\n  | ^^^^^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'leading/single/child/input.scss',
    data: ':is(> a) {b: c}\n',
  },
  {
    name: 'leading/single/child/output.css',
    data: '',
  },
  {
    name: 'leading/single/child/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(> a)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(> a) {b: c}\n  | ^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'leading/single/next_sibling/input.scss',
    data: ':is(+ a) {b: c}\n',
  },
  {
    name: 'leading/single/next_sibling/output.css',
    data: '',
  },
  {
    name: 'leading/single/next_sibling/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(+ a)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(+ a) {b: c}\n  | ^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'leading/single/sibling/input.scss',
    data: ':is(~ a) {b: c}\n',
  },
  {
    name: 'leading/single/sibling/output.css',
    data: '',
  },
  {
    name: 'leading/single/sibling/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(~ a)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(~ a) {b: c}\n  | ^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'leading/multiple/input.scss',
    data: ':is(+ ~ a) {b: c}\n',
  },
  {
    name: 'leading/multiple/output.css',
    data: '',
  },
  {
    name: 'leading/multiple/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(+ ~ a)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(+ ~ a) {b: c}\n  | ^^^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'trailing/single/child/input.scss',
    data: ':is(a >) {b: c}\n',
  },
  {
    name: 'trailing/single/child/output.css',
    data: '',
  },
  {
    name: 'trailing/single/child/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(a >)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(a >) {b: c}\n  | ^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'trailing/single/next_sibling/input.scss',
    data: ':is(a +) {b: c}\n',
  },
  {
    name: 'trailing/single/next_sibling/output.css',
    data: '',
  },
  {
    name: 'trailing/single/next_sibling/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(a +)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(a +) {b: c}\n  | ^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'trailing/single/sibling/input.scss',
    data: ':is(a ~) {b: c}\n',
  },
  {
    name: 'trailing/single/sibling/output.css',
    data: '',
  },
  {
    name: 'trailing/single/sibling/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(a ~)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(a ~) {b: c}\n  | ^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'trailing/multiple/input.scss',
    data: ':is(a +) {b: c}\n',
  },
  {
    name: 'trailing/multiple/output.css',
    data: '',
  },
  {
    name: 'trailing/multiple/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":is(a +)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :is(a +) {b: c}\n  | ^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
]
