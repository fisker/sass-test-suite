export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n@mixin import-google-fonts() {\n  @import url("http://fonts.googleapis.com/css?family=#{$family}");\n}\n$family: string.unquote("Droid+Sans");\n@include import-google-fonts();\n',
  },
  {
    name: 'output.css',
    data: '@import url("http://fonts.googleapis.com/css?family=Droid+Sans");\n',
  },
]
