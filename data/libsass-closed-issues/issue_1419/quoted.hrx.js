// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1419/quoted.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\nfoo {\n  foo: string.to-upper-case("ab\\63 d");\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: "ABCD";\n}\n',
  },
]
