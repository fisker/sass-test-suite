// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_185/merge_no_repeat.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  content: foo;\n\n  @media only screen and (min-width: 1337px) {\n    content: bar;\n\n    @media only screen and (max-width: 42em) {\n      content: baz;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: foo;\n}\n@media only screen and (min-width: 1337px) {\n  .foo {\n    content: bar;\n  }\n}\n@media only screen and (min-width: 1337px) and (max-width: 42em) {\n  .foo {\n    content: baz;\n  }\n}\n',
  },
]
