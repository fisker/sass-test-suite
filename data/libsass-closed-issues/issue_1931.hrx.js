// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1931.hrx

export default [
  {
    name: 'input.scss',
    data: "$var: 'http://test.com';\nbody {\n  background-image: url( #{$var});\n}",
  },
  {
    name: 'output.css',
    data: 'body {\n  background-image: url(http://test.com);\n}\n',
  },
]
