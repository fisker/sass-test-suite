export default [
  {
    name: 'input.scss',
    data: '@use "midstream" with ($a: b);\n',
  },
  {
    name: '_midstream.scss',
    data: '@use "upstream";\nupstream.$a: c !default;\n',
  },
  {
    name: '_upstream.scss',
    data: '$a: d;\n',
  },
  {
    name: 'error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @use "midstream" with ($a: b);\n  |                        ^^^^^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
]
