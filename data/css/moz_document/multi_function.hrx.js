// https://github.com/sass/sass-spec/blob/HEAD/spec/css/moz_document/multi_function.hrx

export default [
  {
    name: 'input.scss',
    data: '@-moz-document url(http://www.w3.org/),\n               url-prefix(http://www.w3.org/Style/),\n               domain(mozilla.org),\n               regexp("https:.*") {\n  a {b: c}\n}\n',
  },
  {
    name: 'output.css',
    data: '@-moz-document url(http://www.w3.org/),\n               url-prefix(http://www.w3.org/Style/),\n               domain(mozilla.org),\n               regexp("https:.*") {\n  a {\n    b: c;\n  }\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [moz-document]: @-moz-document is deprecated and support will be removed in Dart Sass 2.0.0.\n\nFor details, see https://sass-lang.com/d/moz-document.\n\n  ,\n1 | / @-moz-document url(http://www.w3.org/),\n2 | |                url-prefix(http://www.w3.org/Style/),\n3 | |                domain(mozilla.org),\n4 | |                regexp("https:.*") {\n5 | |   a {b: c}\n6 | \\ }\n  \'\n    input.scss 1:1  root stylesheet\n',
  },
]
