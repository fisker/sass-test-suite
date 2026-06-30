// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_641.hrx

export default [
  {
    name: 'input.scss',
    data: '.#{"foo"}--1 { width:100%; }',
  },
  {
    name: 'output.css',
    data: '.foo--1 {\n  width: 100%;\n}\n',
  },
]
