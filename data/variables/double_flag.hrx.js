// https://github.com/sass/sass-spec/blob/HEAD/spec/variables/double_flag.hrx

export default [
  {
    name: 'default/input.scss',
    data: '$a: b !default !default;\n\nc {d: $a}\n',
  },
  {
    name: 'default/output.css',
    data: 'c {\n  d: b;\n}\n',
  },
  {
    name: 'default/warning',
    data: "DEPRECATION WARNING [duplicate-var-flags]: !default should only be written once for each variable.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n1 | $a: b !default !default;\n  |                ^^^^^^^^\n  '\n    input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'global/input.scss',
    data: '$a: b;\nc {\n  $a: d !global !global;\n  e: $a\n}\n',
  },
  {
    name: 'global/output.css',
    data: 'c {\n  e: d;\n}\n',
  },
  {
    name: 'global/warning',
    data: "DEPRECATION WARNING [duplicate-var-flags]: !global should only be written once for each variable.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n3 |   $a: d !global !global;\n  |                 ^^^^^^^\n  '\n    input.scss 3:17  root stylesheet\n",
  },
]
