// https://github.com/sass/sass-spec/blob/HEAD/spec/parser/selector.hrx

export default [
  {
    name: 'escaped_backslash/input.scss',
    data: '// Regression test for sass/dart-sass#1855.\n\\\\{\n  b: c;\n}\n',
  },
  {
    name: 'escaped_backslash/output.css',
    data: '\\\\ {\n  b: c;\n}\n',
  },
  {
    name: 'inline/input.sass',
    data: 'a, b\n    c: d\n',
  },
  {
    name: 'inline/output.css',
    data: 'a, b {\n  c: d;\n}\n',
  },
  {
    name: 'multiline/input.sass',
    data: 'a,\nb\n  c: d\n',
  },
  {
    name: 'multiline/output.css',
    data: 'a,\nb {\n  c: d;\n}\n',
  },
  {
    name: 'newline/no_comma/input.sass',
    data: 'a\nb\n  c: d\n',
  },
  {
    name: 'newline/no_comma/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'newline/no_comma/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | a\n  | ^\n  '\n    input.sass 1:1  root stylesheet\n",
  },
  {
    name: 'newline/after_comma/input.sass',
    data: 'a,\nb\n  c: d\n',
  },
  {
    name: 'newline/after_comma/output.css',
    data: 'a,\nb {\n  c: d;\n}\n',
  },
  {
    name: 'newline/after_comma_indented/input.sass',
    data: 'a,\n    b\n  c: d\n',
  },
  {
    name: 'newline/after_comma_indented/output.css',
    data: 'a,\nb {\n  c: d;\n}\n',
  },
  {
    name: 'error/newline/before_comma/input.sass',
    data: 'a\n,b\n  c: d\n',
  },
  {
    name: 'error/newline/before_comma/error',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | a\n  | ^\n  '\n    input.sass 1:1  root stylesheet\n\nError: expected selector.\n  ,\n1 | a\n  |  ^\n  '\n  input.sass 1:2  root stylesheet\n",
  },
  {
    name: 'error/empty_placeholder/input.scss',
    data: '% {\n  a: b;\n}\n',
  },
  {
    name: 'error/empty_placeholder/error',
    data: "Error: Expected identifier.\n  ,\n1 | % {\n  |  ^\n  '\n  input.scss 1:2  root stylesheet\n",
  },
]
