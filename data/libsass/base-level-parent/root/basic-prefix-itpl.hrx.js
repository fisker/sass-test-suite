// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/root/basic-prefix-itpl.hrx

export default [
  {
    name: 'input.scss',
    data: 'pre#{&} {\r\n  foo {\r\n    bar: baz;\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'pre foo {\n  bar: baz;\n}\n',
  },
]
