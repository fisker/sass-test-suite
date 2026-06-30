export default [
  {
    name: 'with/input.scss',
    data: '@use "used" with ($a: input a);\n',
  },
  {
    name: 'with/_used.scss',
    data: '@forward "forwarded" with ($a: used a 1 !default);\n@forward "forwarded" with ($a: used a 2 !default);\n',
  },
  {
    name: 'with/_forwarded.scss',
    data: '$a: forwarded a !default;\n$b: forwarded b !default;\n',
  },
  {
    name: 'with/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,\n1 | @forward "forwarded" with ($a: used a 1 !default);\n  | ================================================= original load\n2 | @forward "forwarded" with ($a: used a 2 !default);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  _used.scss 2:1  @use\n  input.scss 1:1  root stylesheet\n',
  },
]
