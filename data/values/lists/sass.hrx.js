export default [
  {
    name: 'inline/comma/input.sass',
    data: 'a\n  b: c, d\n',
  },
  {
    name: 'inline/comma/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'inline/wrapped/input.sass',
    data: 'a\n  b: (c, d)\n',
  },
  {
    name: 'inline/wrapped/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'inline/trailing_comma/input.sass',
    data: 'a\n  b: c, d,\n',
  },
  {
    name: 'inline/trailing_comma/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'paren/no_indent/input.sass',
    data: 'a\n  b: (\nc,\nd\n)\n',
  },
  {
    name: 'paren/no_indent/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'paren/indented_under/input.sass',
    data: 'a\n  b: (\n    c,\n    d\n)\n',
  },
  {
    name: 'paren/indented_under/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'paren/value_aligned/input.sass',
    data: 'a\n  b: ( c\n       d\n  )\n',
  },
  {
    name: 'paren/value_aligned/output.css',
    data: 'a {\n  b: c d;\n}\n',
  },
  {
    name: 'paren/trailing_comma/input.sass',
    data: '\na\n  b: (\n    c,\n    d,\n  )\n',
  },
  {
    name: 'paren/trailing_comma/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'paren/whitespace/after_paren/input.sass',
    data: 'a\n  b: (\n    c, d)\n',
  },
  {
    name: 'paren/whitespace/after_paren/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'paren/whitespace/variable/input.sass',
    data: '$a: (b, e\n  )\n',
  },
  {
    name: 'paren/whitespace/variable/output.css',
    data: '',
  },
  {
    name: 'paren/whitespace/variable_nested/input.sass',
    data: '$a: (b c, e\n  )\n',
  },
  {
    name: 'paren/whitespace/variable_nested/output.css',
    data: '',
  },
  {
    name: 'error/paren/empty/whitespace/between/input.sass',
    data: 'a\n  b: (\n  )\n',
  },
  {
    name: 'error/paren/empty/whitespace/between/error',
    data: "Error: () isn't a valid CSS value.\n  ,\n2 |     b: (\n  | ,------^\n3 | \\   )\n  '\n  input.sass 2:6  root stylesheet\n",
  },
  {
    name: 'error/no_parens/no_trailing_comma/input.sass',
    data: 'a\n  b: c,\n     d\n',
  },
  {
    name: 'error/no_parens/no_trailing_comma/error',
    data: 'Error: expected ":".\n  ,\n3 |      d\n  |       ^\n  \'\n  input.sass 3:7  root stylesheet\n',
  },
  {
    name: 'error/no_parens/trailing_comma/input.sass',
    data: 'a\n  b: c,\n     d,\n',
  },
  {
    name: 'error/no_parens/trailing_comma/error',
    data: 'Error: expected ":".\n  ,\n3 |      d,\n  |       ^\n  \'\n  input.sass 3:7  root stylesheet\n',
  },
]
