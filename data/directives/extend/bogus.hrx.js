// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/extend/bogus.hrx

export default [
  {
    name: 'leading/input.scss',
    data: 'a {b: c}\n> d {@extend a}\n',
  },
  {
    name: 'leading/output.css',
    data: 'a, > d {\n  b: c;\n}\n',
  },
  {
    name: 'leading/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "> d" is invalid CSS and shouldn\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | > d {@extend a}\n  | ^^^ invalid selector\n  |      ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'trailing/input.scss',
    data: 'a {b: c}\nd + {@extend a}\n',
  },
  {
    name: 'trailing/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'trailing/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "d +" is invalid CSS and shouldn\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | d + {@extend a}\n  | ^^^ invalid selector\n  |      ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'multi/leading/input.scss',
    data: 'a {b: c}\n+ ~ d {@extend a}\n',
  },
  {
    name: 'multi/leading/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'multi/leading/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "+ ~ d" is invalid CSS and can\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | + ~ d {@extend a}\n  | ^^^^^ invalid selector\n  |        ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'multi/trailing/input.scss',
    data: 'a {b: c}\nd > + {@extend a}\n',
  },
  {
    name: 'multi/trailing/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'multi/trailing/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "d > +" is invalid CSS and can\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | d > + {@extend a}\n  | ^^^^^ invalid selector\n  |        ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'multi/middle/input.scss',
    data: 'a {b: c}\nd ~ > c {@extend a}\n',
  },
  {
    name: 'multi/middle/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'multi/middle/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "d ~ > c" is invalid CSS and can\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | d ~ > c {@extend a}\n  | ^^^^^^^ invalid selector\n  |          ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'only/input.scss',
    data: 'a {b: c}\n+ {@extend a}\n',
  },
  {
    name: 'only/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'only/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "+" is invalid CSS and shouldn\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | + {@extend a}\n  | ^ invalid selector\n  |    ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
]
