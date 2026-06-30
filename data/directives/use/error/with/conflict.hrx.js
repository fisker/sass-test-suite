// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/with/conflict.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "midstream" with ($a: b);\n',
  },
  {
    name: '_midstream.scss',
    data: '@use "left" as *;\n@use "right" as *;\n\n$a: c !default;\n',
  },
  {
    name: '_left.scss',
    data: '$a: left;\n',
  },
  {
    name: '_right.scss',
    data: '$a: right;\n',
  },
  {
    name: 'error',
    data: 'Error: This variable is available from multiple global modules.\n    ,\n1   | @use "left" as *;\n    | ================ includes variable\n2   | @use "right" as *;\n    | ================= includes variable\n... |\n4   | $a: c !default;\n    | ^^^^^^^^^^^^^^ variable use\n    \'\n  _midstream.scss 4:1  @use\n  input.scss 1:1       root stylesheet\n',
  },
]
