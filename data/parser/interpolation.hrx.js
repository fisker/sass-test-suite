export default [
  {
    name: 'whitespace/after_open/input.sass',
    data: 'a\n  b: #{\n    c}\n\n  ',
  },
  {
    name: 'whitespace/after_open/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'whitespace/after_val/input.sass',
    data: 'a\n  b: #{c\n    }\n\n  ',
  },
  {
    name: 'whitespace/after_val/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'whitespace/between_vals/input.sass',
    data: 'a\n  b: #{c\n    d}\n',
  },
  {
    name: 'whitespace/between_vals/output.css',
    data: 'a {\n  b: c d;\n}\n',
  },
  {
    name: 'error/partial_bracket/scss/input.scss',
    data: '[a#{"]:is(b"}) {c:d}\n ',
  },
  {
    name: 'error/partial_bracket/scss/error',
    data: 'Error: expected "]".\n  ,\n1 | [a#{"]:is(b"}) {c:d}\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'error/partial_bracket/sass/input.sass',
    data: '[a#{"]:is(b"})\n  c: d\n ',
  },
  {
    name: 'error/partial_bracket/sass/error',
    data: 'Error: expected "]".\n  ,\n1 | [a#{"]:is(b"})\n  |              ^\n  \'\n  input.sass 1:14  root stylesheet\n',
  },
  {
    name: 'error/selector/unmatched_close_paren/input.sass',
    data: 'a:is(b))\n  c: d\n\n  ',
  },
  {
    name: 'error/selector/unmatched_close_paren/error',
    data: 'Error: Unexpected ")".\n  ,\n1 | a:is(b))\n  |        ^\n  \'\n  input.sass 1:8  root stylesheet\n',
  },
  {
    name: 'error/selector/unmatched_close_bracket/input.sass',
    data: 'a[b]]\n  c: d\n\n  ',
  },
  {
    name: 'error/selector/unmatched_close_bracket/error',
    data: 'Error: Unexpected "]".\n  ,\n1 | a[b]]\n  |     ^\n  \'\n  input.sass 1:5  root stylesheet\n',
  },
]
