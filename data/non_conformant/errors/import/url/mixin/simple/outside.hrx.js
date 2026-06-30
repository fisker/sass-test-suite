// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/import/url/mixin/simple/outside.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n@mixin import-google-fonts() {\r\n  @import url("http://fonts.googleapis.com/css?family=#{$family}");\r\n}\r\n$family: string.unquote("Droid+Sans");\r\n@include import-google-fonts();',
  },
  {
    name: 'output.css',
    data: '@import url("http://fonts.googleapis.com/css?family=Droid+Sans");\n',
  },
]
