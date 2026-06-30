// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_346.hrx

export default [
  {
    name: 'input.scss',
    data: "$mediaquery: 'and (min-width: 300px)';\n\n@media all #{$mediaquery} {\n  div {\n    display: block;\n  }\n}\n",
  },
  {
    name: 'output.css',
    data: '@media all and (min-width: 300px) {\n  div {\n    display: block;\n  }\n}\n',
  },
]
