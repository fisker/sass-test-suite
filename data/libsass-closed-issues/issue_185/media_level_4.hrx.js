// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_185/media_level_4.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @media (pointer: none) {\n    content: foo;\n\n    @media (scripting) {\n      content: baz;\n\n      @media (light-level: dim) {\n        content: bar;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (pointer: none) {\n  .foo {\n    content: foo;\n  }\n}\n@media (pointer: none) and (scripting) {\n  .foo {\n    content: baz;\n  }\n}\n\n@media (pointer: none) and (scripting) and (light-level: dim) {\n  .foo {\n    content: bar;\n  }\n}\n',
  },
]
