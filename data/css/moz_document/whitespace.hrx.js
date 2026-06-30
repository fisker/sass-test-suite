// https://github.com/sass/sass-spec/blob/HEAD/spec/css/moz_document/whitespace.hrx

export default [
  {
    name: 'before_arg/scss/input.scss',
    data: '@-moz-document\n  url-prefix(a) {}\n',
  },
  {
    name: 'before_arg/scss/output.css',
    data: '@-moz-document url-prefix(a) {}\n',
  },
  {
    name: 'before_arg/scss/warning',
    data: "DEPRECATION WARNING [moz-document]: @-moz-document is deprecated and support will be removed in Dart Sass 2.0.0.\n\nFor details, see https://sass-lang.com/d/moz-document.\n\n  ,\n1 | / @-moz-document\n2 | \\   url-prefix(a) {}\n  '\n    input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'after_arg/scss/input.scss',
    data: '@-moz-document url-prefix(a)\n  {}\n',
  },
  {
    name: 'after_arg/scss/output.css',
    data: '@-moz-document url-prefix(a) {}\n',
  },
  {
    name: 'after_arg/scss/warning',
    data: "DEPRECATION WARNING [moz-document]: @-moz-document is deprecated and support will be removed in Dart Sass 2.0.0.\n\nFor details, see https://sass-lang.com/d/moz-document.\n\n  ,\n1 | / @-moz-document url-prefix(a)\n2 | \\   {}\n  '\n    input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'error/before_arg/sass/input.sass',
    data: '@-moz-document\n  url-prefix(a)\n',
  },
  {
    name: 'error/before_arg/sass/error',
    data: "Error: Expected identifier.\n  ,\n1 | @-moz-document\n  |               ^\n  '\n  input.sass 1:15  root stylesheet\n",
  },
]
