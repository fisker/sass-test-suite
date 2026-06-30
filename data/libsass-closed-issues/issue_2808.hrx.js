// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2808.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\ntest {\n  content: string.slice(abcdef, -10, 2)\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  content: ab;\n}\n',
  },
]
