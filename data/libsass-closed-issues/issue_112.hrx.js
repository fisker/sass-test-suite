// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_112.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin media($var1, $var2) {\r\n  @media screen and ($var1: $var2) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@include media(max-device-width, 500px) {\r\n  foo {\r\n    bar: "works";\r\n  }\r\n}',
  },
  {
    name: 'output.css',
    data: '@media screen and (max-device-width: 500px) {\n  foo {\n    bar: "works";\n  }\n}\n',
  },
]
