export default [
  {
    name: 'ident_only/input.scss',
    data: '@supports (a) {@b}\n',
  },
  {
    name: 'ident_only/output.css',
    data: '@supports (a) {\n  @b;\n}\n',
  },
  {
    name: 'idents/input.scss',
    data: '@supports (a b) {@c}\n',
  },
  {
    name: 'idents/output.css',
    data: '@supports (a b) {\n  @c;\n}\n',
  },
  {
    name: 'symbols/input.scss',
    data: '@supports (a !&$ZH()&;*{&A}_=-+#/><) {@b}\n',
  },
  {
    name: 'symbols/output.css',
    data: '@supports (a !&$ZH()&;*{&A}_=-+#/><) {\n  @b;\n}\n',
  },
  {
    name: 'no_space/input.scss',
    data: '@supports (a!) {@b}\n',
  },
  {
    name: 'no_space/output.css',
    data: '@supports (a!) {\n  @b;\n}\n',
  },
  {
    name: 'only_space/input.scss',
    data: '@supports (a ) {@b}\n',
  },
  {
    name: 'only_space/output.css',
    data: '@supports (a ) {\n  @b;\n}\n',
  },
  {
    name: 'interpolated_ident/full/input.scss',
    data: '@supports (#{"a"} b) {@c}\n',
  },
  {
    name: 'interpolated_ident/full/output.css',
    data: '@supports (a b) {\n  @c;\n}\n',
  },
  {
    name: 'interpolated_ident/full_before_andlike/input.scss',
    data: '@supports (#{"a"} andb) {@c}\n',
  },
  {
    name: 'interpolated_ident/full_before_andlike/output.css',
    data: '@supports (a andb) {\n  @c;\n}\n',
  },
  {
    name: 'interpolated_ident/partial/input.scss',
    data: '@supports (a#{"b"}c d) {@e}\n',
  },
  {
    name: 'interpolated_ident/partial/output.css',
    data: '@supports (abc d) {\n  @e;\n}\n',
  },
  {
    name: 'interpolated_any_value/full/input.scss',
    data: '@supports (a #{1 + 1}) {@b}\n',
  },
  {
    name: 'interpolated_any_value/full/output.css',
    data: '@supports (a 2) {\n  @b;\n}\n',
  },
  {
    name: 'interpolated_any_value/partial/input.scss',
    data: '@supports (a <#{1 + 1}>) {@b}\n',
  },
  {
    name: 'interpolated_any_value/partial/output.css',
    data: '@supports (a <2>) {\n  @b;\n}\n',
  },
]
