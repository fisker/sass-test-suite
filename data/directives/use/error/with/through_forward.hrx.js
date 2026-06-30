// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/with/through_forward.hrx

export default [
  {
    name: 'show/input.scss',
    data: '@use "used" with ($a: b);\n',
  },
  {
    name: 'show/_used.scss',
    data: '@forward "forwarded" show $b;\n',
  },
  {
    name: 'show/_forwarded.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'show/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @use "used" with ($a: b);\n  |                   ^^^^^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
  {
    name: 'hide/input.scss',
    data: '@use "used" with ($a: b);\n',
  },
  {
    name: 'hide/_used.scss',
    data: '@forward "forwarded" hide $a;\n',
  },
  {
    name: 'hide/_forwarded.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'hide/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @use "used" with ($a: b);\n  |                   ^^^^^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
  {
    name: 'as/input.scss',
    data: '@use "used" with ($a: b);\n',
  },
  {
    name: 'as/_used.scss',
    data: '@forward "forwarded" as c-*;\n',
  },
  {
    name: 'as/_forwarded.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'as/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @use "used" with ($a: b);\n  |                   ^^^^^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
  {
    name: 'with/input.scss',
    data: '@use "used" with ($a: b);\n',
  },
  {
    name: 'with/_used.scss',
    data: '@forward "forwarded" with ($a: c);\n',
  },
  {
    name: 'with/_forwarded.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'with/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @use "used" with ($a: b);\n  |                   ^^^^^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
]
