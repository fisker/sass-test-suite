// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/import/url/mixin/simple/inside.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n@mixin import-google-fonts() {\r\n  @import url("http://fonts.googleapis.com/css?family=#{$family}");\r\n}\r\nfoo {\r\n  $family: string.unquote("Droid+Sans");\r\n  @include import-google-fonts();\r\n}',
  },
  {
    name: 'error',
    data: 'Error: Undefined variable.\n  ,\n3 |   @import url("http://fonts.googleapis.com/css?family=#{$family}");\r\n  |                                                         ^^^^^^^\n  \'\n  input.scss 3:57  import-google-fonts()\n  input.scss 7:3   root stylesheet\n',
  },
]
