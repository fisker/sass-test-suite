// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2697.hrx

export default [
  {
    name: 'input.scss',
    data: '.Card {\n  &:not(.is-open, .is-static) {\n    .CardContents {\n      display: none;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.Card:not(.is-open, .is-static) .CardContents {\n  display: none;\n}\n',
  },
]
