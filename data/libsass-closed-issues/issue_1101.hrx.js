// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1101.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n$foo: white;\r\nfoo {\r\n  bar: color.adjust($foo, $hue: -6deg, $lightness: -16%, $saturation: -7%);\r\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: rgb(214.2, 214.2, 214.2);\n}\n',
  },
]
