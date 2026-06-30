export default [
  {
    name: 'else/partial_if/input.scss',
    data: '// Regression test for sass/dart-sass#1029. The lack of a trailing newline is\n// necessary for the regression test.\n@if a {}\n@else i',
  },
  {
    name: 'else/partial_if/error',
    data: 'Error: expected "{".\n  ,\n4 | @else i\n  |       ^\n  \'\n  input.scss 4:7  root stylesheet\n',
  },
]
