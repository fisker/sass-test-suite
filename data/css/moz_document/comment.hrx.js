// https://github.com/sass/sass-spec/blob/HEAD/spec/css/moz_document/comment.hrx

export default [
  {
    name: 'before_arg/loud/input.scss',
    data: '@-moz-document /**/ url-prefix(a) {}\n',
  },
  {
    name: 'before_arg/loud/output.css',
    data: '@-moz-document url-prefix(a) {}\n',
  },
  {
    name: 'before_arg/loud/warning',
    data: "DEPRECATION WARNING [moz-document]: @-moz-document is deprecated and support will be removed in Dart Sass 2.0.0.\n\nFor details, see https://sass-lang.com/d/moz-document.\n\n  ,\n1 | @-moz-document /**/ url-prefix(a) {}\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'before_arg/silent/input.scss',
    data: '@-moz-document //\n  url-prefix(a) {}\n',
  },
  {
    name: 'before_arg/silent/output.css',
    data: '@-moz-document url-prefix(a) {}\n',
  },
  {
    name: 'before_arg/silent/warning',
    data: "DEPRECATION WARNING [moz-document]: @-moz-document is deprecated and support will be removed in Dart Sass 2.0.0.\n\nFor details, see https://sass-lang.com/d/moz-document.\n\n  ,\n1 | / @-moz-document //\n2 | \\   url-prefix(a) {}\n  '\n    input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'after_arg/loud/input.scss',
    data: '@-moz-document url-prefix(a) /**/ {}\n',
  },
  {
    name: 'after_arg/loud/output.css',
    data: '@-moz-document url-prefix(a) {}\n',
  },
  {
    name: 'after_arg/loud/warning',
    data: "DEPRECATION WARNING [moz-document]: @-moz-document is deprecated and support will be removed in Dart Sass 2.0.0.\n\nFor details, see https://sass-lang.com/d/moz-document.\n\n  ,\n1 | @-moz-document url-prefix(a) /**/ {}\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'after_arg/silent/input.scss',
    data: '@-moz-document url-prefix(a) //\n  {}\n',
  },
  {
    name: 'after_arg/silent/output.css',
    data: '@-moz-document url-prefix(a) {}\n',
  },
  {
    name: 'after_arg/silent/warning',
    data: "DEPRECATION WARNING [moz-document]: @-moz-document is deprecated and support will be removed in Dart Sass 2.0.0.\n\nFor details, see https://sass-lang.com/d/moz-document.\n\n  ,\n1 | / @-moz-document url-prefix(a) //\n2 | \\   {}\n  '\n    input.scss 1:1  root stylesheet\n",
  },
]
