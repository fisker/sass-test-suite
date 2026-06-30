// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1672.hrx

export default [
  {
    name: 'input.scss',
    data: "$breakpoint: 'tablet';\n\n.-#{$breakpoint} {\n  color: #FFF;\n}",
  },
  {
    name: 'output.css',
    data: '.-tablet {\n  color: #FFF;\n}\n',
  },
]
