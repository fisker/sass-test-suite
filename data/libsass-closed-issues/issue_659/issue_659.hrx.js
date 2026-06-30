// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_659/issue_659.hrx

export default [
  {
    name: 'input.scss',
    data: '// libsass issue 659: never output empty blocks\n// https://github.com/sass/libsass/issues/659\n\n@function null() {\n  @return null;\n}\n\n$foo: null;\n\n.test {\n  out: null();\n  out: $foo;\n}',
  },
  {
    name: 'output.css',
    data: '',
  },
]
