// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_593.hrx

export default [
  {
    name: 'input.scss',
    data: "h1:nth-of-type(#{2 + 'n + 1'}) {\n    color: red;\n}\n\nh1:nth-of-type(#{2 + 'n   +  1'}) {\n    color: red;\n}\n",
  },
  {
    name: 'output.css',
    data: 'h1:nth-of-type(2n + 1) {\n  color: red;\n}\n\nh1:nth-of-type(2n + 1) {\n  color: red;\n}\n',
  },
]
