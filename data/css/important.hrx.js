export default [
  {
    name: 'syntax/sass/multiline/after_bang/input.sass',
    data: 'a\n  b: c!\n    important\n',
  },
  {
    name: 'syntax/sass/multiline/after_bang/output.css',
    data: 'a {\n  b: c !important;\n}\n',
  },
  {
    name: 'error/syntax/eof_after_bang/input.scss',
    data: '// Regression test for sass/dart-sass#1049. The lack of a trailing newline is\n// necessary for the regression test.\na {b: !',
  },
  {
    name: 'error/syntax/eof_after_bang/error',
    data: 'Error: Expected "important".\n  ,\n3 | a {b: !\n  |        ^\n  \'\n  input.scss 3:8  root stylesheet\n',
  },
  {
    name: 'error/syntax/sass/multiline/after_prop/input.sass',
    data: 'a\n  b: c\n    !important\n',
  },
  {
    name: 'error/syntax/sass/multiline/after_prop/error',
    data: "Error: Expected identifier.\n  ,\n2 |   b: c\n  |       ^\n  '\n  input.sass 2:7  root stylesheet\n",
  },
]
