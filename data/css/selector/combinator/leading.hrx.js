// https://github.com/sass/sass-spec/blob/HEAD/spec/css/selector/combinator/leading.hrx

export default [
  {
    name: 'single/child/input.scss',
    data: '> a {b: c}\n',
  },
  {
    name: 'single/child/output.css',
    data: '> a {\n  b: c;\n}\n',
  },
  {
    name: 'single/child/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "> a" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | > a {b: c}\n  | ^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'single/next_sibling/input.scss',
    data: '+ a {b: c}\n',
  },
  {
    name: 'single/next_sibling/output.css',
    data: '+ a {\n  b: c;\n}\n',
  },
  {
    name: 'single/next_sibling/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "+ a" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | + a {b: c}\n  | ^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'single/sibling/input.scss',
    data: '~ a {b: c}\n',
  },
  {
    name: 'single/sibling/output.css',
    data: '~ a {\n  b: c;\n}\n',
  },
  {
    name: 'single/sibling/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "~ a" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | ~ a {b: c}\n  | ^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'multiple/whitespace/input.scss',
    data: '+ ~ a {b: c}\n',
  },
  {
    name: 'multiple/whitespace/output.css',
    data: '',
  },
  {
    name: 'multiple/whitespace/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "+ ~ a" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | + ~ a {b: c}\n  | ^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'multiple/no_whitespace/input.scss',
    data: '> > a {b: c}\n',
  },
  {
    name: 'multiple/no_whitespace/output.css',
    data: '',
  },
  {
    name: 'multiple/no_whitespace/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "> > a" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | > > a {b: c}\n  | ^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
]
