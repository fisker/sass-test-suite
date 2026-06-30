// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_699.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n.selector {\n  color: color.invert(rebeccapurple);\n}',
  },
  {
    name: 'output.css',
    data: '.selector {\n  color: #99cc66;\n}\n',
  },
]
