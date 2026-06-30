// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_558.hrx

export default [
  {
    name: 'input.scss',
    data: "@function is_gold($c) {\r\n    @if ($c == gold) {\r\n        @return 'yes';\r\n    }\r\n    @return 'no';\r\n}\r\n\r\ndiv {\r\n    foo: is_gold(gold);\r\n    bar: is_gold(white);\r\n}",
  },
  {
    name: 'output.css',
    data: 'div {\n  foo: "yes";\n  bar: "no";\n}\n',
  },
]
