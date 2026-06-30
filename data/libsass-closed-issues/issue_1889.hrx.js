// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1889.hrx

export default [
  {
    name: 'input.scss',
    data: '@media (min-width: 640px) { \n  /* comment */\n}\n\ndiv {\n  @media (min-width: 320px) { \n    /* comment */\n  }\n}',
  },
  {
    name: 'output.css',
    data: '@media (min-width: 640px) {\n  /* comment */\n}\n@media (min-width: 320px) {\n  div {\n    /* comment */\n  }\n}\n',
  },
]
