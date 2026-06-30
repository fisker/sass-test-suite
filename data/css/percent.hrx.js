export default [
  {
    name: 'declaration/alone/input.scss',
    data: 'a {b: %}\n',
  },
  {
    name: 'declaration/alone/output.css',
    data: 'a {\n  b: %;\n}\n',
  },
  {
    name: 'declaration/before/input.scss',
    data: 'a {b: % c}\n',
  },
  {
    name: 'declaration/before/output.css',
    data: 'a {\n  b: % c;\n}\n',
  },
  {
    name: 'declaration/after/input.scss',
    data: 'a {b: c %}\n',
  },
  {
    name: 'declaration/after/output.css',
    data: 'a {\n  b: c %;\n}\n',
  },
  {
    name: 'function/alone/input.scss',
    data: 'a {b: c(%)}\n',
  },
  {
    name: 'function/alone/output.css',
    data: 'a {\n  b: c(%);\n}\n',
  },
  {
    name: 'function/before/input.scss',
    data: 'a {b: c(% d)}\n',
  },
  {
    name: 'function/before/output.css',
    data: 'a {\n  b: c(% d);\n}\n',
  },
  {
    name: 'function/after/input.scss',
    data: 'a {b: c(d %)}\n',
  },
  {
    name: 'function/after/output.css',
    data: 'a {\n  b: c(d %);\n}\n',
  },
  {
    name: 'indented/after/input.sass',
    data: 'a\n  b: 3 %\n  2\n',
  },
  {
    name: 'indented/after/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/indented/after/input.sass',
    data: '// This could potentially be parsed as a declaration followed by an empty style\n// rule, but this is forbidden by the spec to avoid parser backtracking.\na\n  b: c %\n  d\n',
  },
  {
    name: 'error/indented/after/error',
    data: 'Error: Undefined operation "c % d".\n  ,\n4 |     b: c %\n  | ,------^\n5 | \\   d\n  \'\n  input.sass 4:6  root stylesheet\n',
  },
]
