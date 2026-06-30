// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1081.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: foo !global !default;\n\ndefault {\n  foo: $foo;\n}\n\n$foo: bar;\n\nafter {\n  @import "import";\n  foo: $foo;\n}\n',
  },
  {
    name: '_import.scss',
    data: 'import-before {\n  foo: $foo;\n}\n\n$foo: baz !global !default;\n\nimport-after {\n  foo: $foo;\n}\n',
  },
  {
    name: 'output.css',
    data: 'default {\n  foo: foo;\n}\n\nafter import-before {\n  foo: bar;\n}\nafter import-after {\n  foo: bar;\n}\nafter {\n  foo: bar;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n   ,\n10 |   @import \"import\";\n   |           ^^^^^^^^\n   '\n    input.scss 10:11  root stylesheet\n\nDEPRECATION WARNING [new-global]: As of Dart Sass 2.0.0, !global assignments won't be able to declare new variables.\n\nSince this assignment is at the root of the stylesheet, the !global flag is\nunnecessary and can safely be removed.\n\n  ,\n1 | $foo: foo !global !default;\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:1  root stylesheet\n",
  },
]
