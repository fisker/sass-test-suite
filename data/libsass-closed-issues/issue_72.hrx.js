// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_72.hrx

export default [
  {
    name: 'input.scss',
    data: "test {\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#223344', endColorstr='#112233',GradientType=0 );\r\n}\r\n\r\n@mixin opacity($opacity) {\r\n    opacity: $opacity / 100;\r\n    filter: alpha(opacity=$opacity);\r\n}",
  },
  {
    name: 'output.css',
    data: "test {\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#223344', endColorstr='#112233',GradientType=0 );\n}\n",
  },
]
