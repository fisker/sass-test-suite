// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1079.hrx

export default [
  {
    name: 'input.scss',
    data: '#{hdr(2,5)} { color: #08c; }',
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,--> input.scss\n1 | #{hdr(2,5)} { color: #08c; }\n  |   ^^^^^^^^ \n  '\n  ,\n1 | hdr(2, 5) \n  |    = error in interpolated output\n  '\n  input.scss 1:3  root stylesheet\n",
  },
]
