// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2295/original.hrx

export default [
  {
    name: 'input.scss',
    data: "$include-foo: true !default;\r\n.my-scope {\r\n  .bar {  display: none; }\r\n  @if ($include-foo) {\r\n    .foo { display: none; }\r\n  }\r\n  @import 'input-bug';\r\n}",
  },
  {
    name: '_input-bug.scss',
    data: '$include-foo: true !default;\r\n.bar { display: none; }\r\n@if ($include-foo) {\r\n  .foo { display: none; }\r\n}',
  },
  {
    name: 'output.css',
    data: '.my-scope .bar {\n  display: none;\n}\n.my-scope .foo {\n  display: none;\n}\n.my-scope .bar {\n  display: none;\n}\n.my-scope .foo {\n  display: none;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n7 |   @import 'input-bug';\r\n  |           ^^^^^^^^^^^\n  '\n    input.scss 7:11  root stylesheet\n",
  },
]
