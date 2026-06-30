export default [
  {
    name: 'leading/single/child/input.scss',
    data: ':has(> a) {b: c}\n',
  },
  {
    name: 'leading/single/child/output.css',
    data: ':has(> a) {\n  b: c;\n}\n',
  },
  {
    name: 'leading/single/next_sibling/input.scss',
    data: ':has(+ a) {b: c}\n',
  },
  {
    name: 'leading/single/next_sibling/output.css',
    data: ':has(+ a) {\n  b: c;\n}\n',
  },
  {
    name: 'leading/single/sibling/input.scss',
    data: ':has(~ a) {b: c}\n',
  },
  {
    name: 'leading/single/sibling/output.css',
    data: ':has(~ a) {\n  b: c;\n}\n',
  },
  {
    name: 'leading/single/parent/input.scss',
    data: '// Regression test for sass/sass#3546\na {\n  :has(~ &) {b: c}\n}\n',
  },
  {
    name: 'leading/single/parent/output.css',
    data: ':has(~ a) {\n  b: c;\n}\n',
  },
  {
    name: 'leading/multiple/direct/input.scss',
    data: ':has(+ ~ a) {b: c}\n',
  },
  {
    name: 'leading/multiple/direct/output.css',
    data: '',
  },
  {
    name: 'leading/multiple/direct/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":has(+ ~ a)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | :has(+ ~ a) {b: c}\n  | ^^^^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'leading/multiple/parent/input.scss',
    data: '~ a {\n  :has(+ &) {b: c}\n}\n',
  },
  {
    name: 'leading/multiple/parent/output.css',
    data: '',
  },
  {
    name: 'leading/multiple/parent/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ":has(+ ~ a)" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 |   :has(+ &) {b: c}\n  |   ^^^^^^^^^\n  \'\n    input.scss 2:3  root stylesheet\n',
  },
]
