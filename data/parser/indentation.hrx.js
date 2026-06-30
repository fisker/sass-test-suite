export default [
  {
    name: 'empty_line/after_indented/input.sass',
    data: '// Regression test for sass/dart-sass#1287\na\n  b\n    c: d\n    \n  e\n    f: g\n  ',
  },
  {
    name: 'empty_line/after_indented/output.css',
    data: 'a b {\n  c: d;\n}\na e {\n  f: g;\n}\n',
  },
  {
    name: 'multiline_indent_level/none/input.sass',
    data: 'a[\nb]\n  c: d;\n',
  },
  {
    name: 'multiline_indent_level/none/output.css',
    data: 'a[b] {\n  c: d;\n}\n',
  },
  {
    name: 'multiline_indent_level/same/input.sass',
    data: 'a[\n  b]\n  c: d\n',
  },
  {
    name: 'multiline_indent_level/same/output.css',
    data: 'a[b] {\n  c: d;\n}\n',
  },
  {
    name: 'multiline_indent_level/more/input.sass',
    data: 'a[\n    b]\n  c: d;\n',
  },
  {
    name: 'multiline_indent_level/more/output.css',
    data: 'a[b] {\n  c: d;\n}\n',
  },
  {
    name: 'error/mixed_syntax/block/input.sass',
    data: 'a {\n  b: c\n}\n  ',
  },
  {
    name: 'error/mixed_syntax/block/error',
    data: "Error: Expected newline.\n  ,\n1 | a {\n  |   ^\n  '\n  input.sass 1:3  root stylesheet\n",
  },
  {
    name: 'error/semicolon_multiple_same_line/input.sass',
    data: 'a\n  b: c; d: e;\n',
  },
  {
    name: 'error/semicolon_multiple_same_line/error',
    data: "Error: multiple statements on one line are not supported in the indented syntax.\n  ,\n2 |   b: c; d: e;\n  |         ^\n  '\n  input.sass 2:9  root stylesheet\n\n",
  },
]
