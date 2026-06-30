// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_485.hrx

export default [
  {
    name: 'input.scss',
    data: '@media not all and (monochrome) { a {foo: bar} }\n@media not screen and (color), print and (color) { a {foo: bar} }\n@media (not (screen and (color))), print and (color) { a {foo: bar} }\n',
  },
  {
    name: 'output.css',
    data: '@media not all and (monochrome) {\n  a {\n    foo: bar;\n  }\n}\n@media not screen and (color), print and (color) {\n  a {\n    foo: bar;\n  }\n}\n@media not (color), print and (color) {\n  a {\n    foo: bar;\n  }\n}\n',
  },
]
