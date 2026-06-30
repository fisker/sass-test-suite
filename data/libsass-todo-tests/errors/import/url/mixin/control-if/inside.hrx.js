// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-tests/errors/import/url/mixin/control-if/inside.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin do_import() {\r\n  @if (true) {\r\n    @import url("http://www.libsass.org");\r\n  }\r\n}\r\n\r\nfoo {\r\n  @include do_import();\r\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  @import url("http://www.libsass.org");\n}\n',
  },
]
