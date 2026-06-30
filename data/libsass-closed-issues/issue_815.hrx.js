// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_815.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\nfoo {\n  foo: string.slice("bar", 1, 2);\n  bar: string.slice("bar", 3);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: "ba";\n  bar: "r";\n}\n',
  },
]
