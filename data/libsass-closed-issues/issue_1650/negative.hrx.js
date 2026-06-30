// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1650/negative.hrx

export default [
  {
    name: 'input.scss',
    data: ':nth-of-type(2n-1),\n:nth-of-type(2n-  1),\n:nth-of-type(2n  -1),\n:nth-of-type(2n  -  1),\n:nth-of-type( 2n  -  1 )\n{ color: red; }\n',
  },
  {
    name: 'output.css',
    data: ':nth-of-type(2n-1),\n:nth-of-type(2n- 1),\n:nth-of-type(2n -1),\n:nth-of-type(2n - 1),\n:nth-of-type(2n - 1) {\n  color: red;\n}\n',
  },
]
