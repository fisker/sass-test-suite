// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1647/directives.hrx

export default [
  {
    name: 'input.scss',
    data: '@foo #{"directive"} {\n  .#{"foo"} { #{"foo-prop"}: #{"foo-val"}; }\n}\n',
  },
  {
    name: 'output.css',
    data: '@foo directive {\n  .foo {\n    foo-prop: foo-val;\n  }\n}\n',
  },
]
