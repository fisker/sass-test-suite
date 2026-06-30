// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_623.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  filter: alpha(opacity=.3); }\n\ndiv {\n  filter: alpha(opacity=0.7); }\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  filter: alpha(opacity=0.3);\n}\n\ndiv {\n  filter: alpha(opacity=0.7);\n}\n',
  },
]
