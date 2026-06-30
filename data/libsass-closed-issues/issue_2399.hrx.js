// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2399.hrx

export default [
  {
    name: 'input.scss',
    data: '.thing {\r\n\tcolor: black;\r\n}\r\n\r\n.a,\r\n.b,\r\n.c,\r\n.d,\r\n.e {\r\n\t&:not(.thing) { @extend .thing; }\r\n}',
  },
  {
    name: 'output.css',
    data: '.thing, .a:not(.thing),\n.b:not(.thing),\n.c:not(.thing),\n.d:not(.thing),\n.e:not(.thing) {\n  color: black;\n}\n',
  },
]
