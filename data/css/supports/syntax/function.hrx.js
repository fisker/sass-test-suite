// https://github.com/sass/sass-spec/blob/HEAD/spec/css/supports/syntax/function.hrx

export default [
  {
    name: 'no_arg/input.scss',
    data: '@supports a() {@b}\n',
  },
  {
    name: 'no_arg/output.css',
    data: '@supports a() {\n  @b;\n}\n',
  },
  {
    name: 'plain/input.scss',
    data: '@supports a(b) {@c}\n',
  },
  {
    name: 'plain/output.css',
    data: '@supports a(b) {\n  @c;\n}\n',
  },
  {
    name: 'space/input.scss',
    data: '@supports a( ) {@b}\n',
  },
  {
    name: 'space/output.css',
    data: '@supports a( ) {\n  @b;\n}\n',
  },
  {
    name: 'symbols/input.scss',
    data: '@supports a(!&$ZH()&;*{&A}_=-+#/>:<) {@b}\n',
  },
  {
    name: 'symbols/output.css',
    data: '@supports a(!&$ZH()&;*{&A}_=-+#/>:<) {\n  @b;\n}\n',
  },
  {
    name: 'after_not/input.scss',
    data: '@supports not a() {@b}\n',
  },
  {
    name: 'after_not/output.css',
    data: '@supports not a() {\n  @b;\n}\n',
  },
  {
    name: 'interpolated_name/full/input.scss',
    data: '@supports #{"a"}(b) {@c}\n',
  },
  {
    name: 'interpolated_name/full/output.css',
    data: '@supports a(b) {\n  @c;\n}\n',
  },
  {
    name: 'interpolated_name/partial/input.scss',
    data: '@supports a#{"b"}c(d) {@e}\n',
  },
  {
    name: 'interpolated_name/partial/output.css',
    data: '@supports abc(d) {\n  @e;\n}\n',
  },
  {
    name: 'interpolated_value/full/input.scss',
    data: '@supports a(#{1 + 1}) {@c}\n',
  },
  {
    name: 'interpolated_value/full/output.css',
    data: '@supports a(2) {\n  @c;\n}\n',
  },
  {
    name: 'interpolated_value/partial/input.scss',
    data: '@supports a(<#{1 + 1}>) {@c}\n',
  },
  {
    name: 'interpolated_value/partial/output.css',
    data: '@supports a(<2>) {\n  @c;\n}\n',
  },
]
