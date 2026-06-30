// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2154.hrx

export default [
  {
    name: 'input.scss',
    data: '@media (min-width: 1px) {\n  .first {\n    font-weight: 100;\n\n    @media (min-width: 2px) {}\n  }\n  .second {\n    font-weight: 200;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (min-width: 1px) {\n  .first {\n    font-weight: 100;\n  }\n  .second {\n    font-weight: 200;\n  }\n}\n',
  },
]
