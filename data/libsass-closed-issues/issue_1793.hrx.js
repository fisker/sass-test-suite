// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1793.hrx

export default [
  {
    name: 'input.scss',
    data: '@media (max-width: (2px*5in)) {\n  foo { bar: baz; }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (max-width: calc(10px * 1in)) {\n  foo {\n    bar: baz;\n  }\n}\n',
  },
]
