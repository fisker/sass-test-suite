// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/root/at-root-postfix-itpl.hrx

export default [
  {
    name: 'input.scss',
    data: '@at-root {\r\n  #{&}post {\r\n    foo {\r\n      bar: baz;\r\n    }\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'post foo {\n  bar: baz;\n}\n',
  },
]
