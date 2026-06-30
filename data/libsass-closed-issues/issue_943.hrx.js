// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_943.hrx

export default [
  {
    name: 'input.scss',
    data: '%dog {\n    @media (min-width: 10px) {\n        &:hover {\n            display: none;\n        }\n    }\n}\n\n.puppy {\n    @extend %dog;\n    background-color: red;\n}',
  },
  {
    name: 'output.css',
    data: '@media (min-width: 10px) {\n  .puppy:hover {\n    display: none;\n  }\n}\n\n.puppy {\n  background-color: red;\n}\n',
  },
]
